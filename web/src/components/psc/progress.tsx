import { $, component$, useSignal, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { Chart, registerables } from 'chart.js';

import { useLocalStorage } from "~/hooks/useLocalStorage";
import { ChecklistContext } from "~/store/checklist-context";
import type { Priority, Sections, Section } from '~/types/PSC';
import Icon from '~/components/core/icon';

/**
 * Component for client-side user progress metrics.
 * Combines checklist data with progress from local storage,
 * calculates percentage completion for each priority level,
 * and renders some pretty pie charts to visualize results
 */
export default component$(() => {

  // All checklist data, from store
  const checklists = useContext(ChecklistContext);
  // Completed items, from local storage
  const [checkedItems] = useLocalStorage('PSC_PROGRESS', {});
  // Ignored items, from local storage
  const [ignoredItems] = useLocalStorage('PSC_IGNORED', {});
  // Removed welcome dialog state (previously PSC_CLOSE_WELCOME)
  // Store to hold calculated progress results
  const totalProgress = useSignal({ completed: 0, outOf: 0 });
  // Ref to the radar chart canvas
  const radarChart  = useSignal<HTMLCanvasElement>();
  // Completion data for each section
  const sectionCompletion =  useSignal<number[]>([]);
  // Chart.js instance reference so we can destroy/redraw
  const radarInstance = useSignal<any>(null);

  /**
   * Calculates the users progress over specified sections.
   * Given an array of sections, reads checklists in each,
   * counts total number of checklist items
   * counts the number of completed items from local storage
   * and returns the percentage of completion
   */
  const calculateProgress = $((sections: Sections): { completed: number, outOf: number } => {
    if (!checkedItems.value || !sections.length) {
      return { completed: 0, outOf: 0 };
    }
    let totalItems = sections.reduce((total: number, section: Section) => total + section.checklist.length, 0);
    let totalComplete = 0;
    sections.forEach((section: Section) => {
      section.checklist.forEach((item) => {
        const id = item.point.toLowerCase().replace(/ /g, '-');
        const isComplete = checkedItems.value[id];
        const isIgnored = ignoredItems.value[id];
        if (isComplete) {
          totalComplete++;
        }
        if (isIgnored) {
          totalItems--;
        }
      });
    });
    return { completed: totalComplete, outOf: totalItems };
    // return Math.round((totalComplete / totalItems) * 100);
  });

  /**
   * Filters the checklist items in a given array of sections,
   * so only the ones of a given priority are returned
   * @param sections - Array of sections to filter
   * @param priority - The priority to filter by
   */
  const filterByPriority = $((sections: Sections, priority: Priority): Sections => {
    const normalize = (pri: string) => pri.toLowerCase().replace(/ /g, '-');
    return sections.map(section => ({
      ...section,
      checklist: section.checklist.filter(item => normalize(item.priority) === normalize(priority))
    }));
  });

  /**
   * Draws a completion chart using ProgressBar.js
   * Illustrating a given percent rendered to a given target element
   * @param percentage - The percentage of completion (0-100)
   * @param target - The ID of the element to draw the chart in
   * @param color - The color of the progress chart, defaults to Tailwind primary
   */
  const drawProgress = $((percentage: number, target: string, color?: string) => {
    // Resolve container element reliably
    const container = (typeof target === 'string')
      ? document.querySelector(target)
      : (target as unknown as HTMLElement);
    if (!container) return;
    // Clear previous drawings when re-rendering
    try { (container as HTMLElement).innerHTML = ''; } catch (_e) { /* no-op: container may be virtual during SSR */ }
    // Define colors in hex/RGB for progressbar.js compatibility
    const primaryColor = color || '#9ca3af'; // gray-400
    const foregroundColor = '#6b7280'; // gray-500
    const red = '#ef4444';    // tailwind red-500
    const green = '#22c55e';  // tailwind green-500
    const labelStyles = {
      color: foregroundColor, position: 'absolute', right: '0.5rem',  top: '2rem'
    };
    // Animations to occur on each step of the progress bar
    const stepFunction = (state: any, bar: any) => {
      const value = Math.round(bar.value() * 100);
      bar.path.setAttribute('stroke', state.color);
      bar.setText(value ? `${value}%` : '');
      if (value >= percentage) {
        bar.path.setAttribute('stroke', primaryColor);
      }
    };
    // Define config settings for progress chart
    const progressConfig = {
      strokeWidth: 6,
      trailWidth: 3,
      color: primaryColor,
      trailColor: foregroundColor,
      text: { style: labelStyles },
      from: { color: red },
      to: { color: green },
      step: stepFunction,
    };
    // Initiate ProgressBar.js passing in config, to draw the progress chart
    import('progressbar.js').then((mod) => {
      const ProgressBar: any = (mod as any).default ?? mod;
      const line = new ProgressBar.SemiCircle(container, progressConfig);
      line.animate(percentage / 100);
    });
  });

  /**
   * Given a priority, filters the checklist, calculates data, renders chart
   * @param priority - The priority to filter by
   * @param color - The color override for the chart
   */
  const makeDataAndDrawChart = $((priority: Priority, color?: string) => {
    filterByPriority(checklists.value, priority)
    .then((sections: Sections) => {
      calculateProgress(sections)
        .then((progress) => {
          const { completed, outOf } = progress;
          const percent = outOf > 0 ? Math.round((completed / outOf) * 100) : 0;
          drawProgress(percent, `#${priority}-container`, color)
        })
    });
  });

  /**
   * When the window has loaded (client-side only)
   * Initiate the filtering, calculation and rendering of progress charts
   */
  // Recalculate whenever local progress or checklist data changes
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => JSON.stringify(checkedItems.value));
    track(() => JSON.stringify(ignoredItems.value));
    track(() => JSON.stringify(checklists.value));

    calculateProgress(checklists.value).then((progress) => {
      totalProgress.value = progress;
    });

    makeDataAndDrawChart('essential', '#22c55e');
    makeDataAndDrawChart('optional',  '#f59e0b');
    makeDataAndDrawChart('advanced',  '#ef4444');
  });


  /**
   * Calculates the percentage of completion for each section
   */
  useVisibleTask$(({ track }) => {
    track(() => JSON.stringify(checkedItems.value));
    track(() => JSON.stringify(ignoredItems.value));
    track(() => JSON.stringify(checklists.value));
    (async () => {
      sectionCompletion.value = await Promise.all(checklists.value.map(section => {
        return calculateProgress([section]).then(
          (progress) => progress.outOf > 0 ? Math.round(progress.completed / progress.outOf * 100) : 0
        );
      }));
    })();
  });


  interface RadarChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      [key: string]: any; // Anything else goes!
    }[];
  }

  /**
   * Builds the multi-dimensional data used for the radar chart
   * based on each section, each level of priority, and the progress
   * @param sections - The sections to build data from
   */
  const makeRadarData = $((sections: Sections): Promise<RadarChartData> => {
    // The labels for the corners of the chart, based on sections
    const labels = sections.map((section: Section) => section.title);
    // Items applied to every dataset
    const datasetTemplate = {
      borderWidth: 1,
    };
    // Helper function to asynchronously calculate percentage
    const calculatePercentage = async (section: Section, priority: Priority) => {
      const filteredSections = await filterByPriority([section], priority);
      const progress = await calculateProgress(filteredSections);
      return progress.outOf > 0 ? (progress.completed / progress.outOf) * 100 : 0;
    };
  
    // Asynchronously build data for each priority level
    const buildDataForPriority = (priority: Priority, color: string) => {
      return Promise.all(sections.map(section => calculatePercentage(section, priority)))
        .then(data => ({
          ...datasetTemplate,
          label: priority === 'essential'
            ? 'Essencial'
            : priority === 'optional'
              ? 'Opcional'
              : 'Avançado',
          data: data,
          backgroundColor: color,
        }));
    };
  
    // Wait on each set to resolve, and return the final data object
    return Promise.all([
      buildDataForPriority('advanced', 'hsl(0 91% 71%/75%)'),
      buildDataForPriority('optional', 'hsl(43 96% 56%/75%)'),
      buildDataForPriority('essential', 'hsl(158 64% 52%/75%)'),      
    ]).then(datasets => ({
      labels,
      datasets,
    }));
  });
  
  

  useVisibleTask$(({ track }) => {
    track(() => JSON.stringify(checkedItems.value));
    track(() => JSON.stringify(ignoredItems.value));
    track(() => JSON.stringify(checklists.value));

    Chart.register(...registerables);
    makeRadarData(checklists.value).then((data) => {
      const canvas = radarChart.value;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      if (radarInstance.value) {
        // Update existing chart to avoid duplicate renders
        radarInstance.value.data = data;
        radarInstance.value.update();
      } else {
        radarInstance.value = new Chart(canvas, {
          type: 'radar',
          data,
          options: {
            responsive: true,
            scales: {
              r: {
                angleLines: { display: true, color: '#7d7d7da1' },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false, stepSize: 25 },
                grid: { display: true, color: '#7d7d7dd4' },
              },
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: { font: { size: 10 } },
              },
              tooltip: {
                callbacks: {
                  label: (ctx) => `Concluído ${Math.round(ctx.parsed.r)}% de ${ctx.dataset.label || ''}`,
                }
              }
            },
          }
        });
      }
    });
  });

  const items = [
    { id: 'essential-container', label: 'Essencial' },
    { id: 'optional-container', label: 'Opcional' },
    { id: 'advanced-container', label: 'Avançado' },
  ];

  // OPSEC tips carousel (randomized)
  const OPSEC_TIPS: string[] = [
    'Use autenticação de dois fatores (MFA) sempre que possível.',
    'Evite reutilizar senhas; use um gerenciador de senhas confiável.',
    'Ative bloqueio de tela automático no celular e no computador.',
    'Mantenha sistemas e aplicativos atualizados (patches de segurança).',
    'Prefira chaves de segurança (FIDO2) para contas críticas.',
    'Nunca clique em links suspeitos; verifique domínios com atenção.',
    'Desconfie de anexos inesperados, mesmo vindos de contatos conhecidos.',
    'Separe e-mails: pessoal, financeiro e cadastros com endereços distintos.',
    'Ative alertas de login/atividade em serviços importantes.',
    'Revogue sessões e dispositivos que não reconhece com regularidade.',
    'Revise permissões de apps e extensões periodicamente.',
    'Use navegadores e extensões focadas em privacidade.',
    'Navegue em sessões separadas (perfis) para isolar contextos.',
    'Desabilite pré-visualização de links em mensageiros sensíveis.',
    'Evite enviar dados sensíveis por e-mail sem criptografia.',
    'Criptografe o disco do notebook e do telefone.',
    'Faça backup regular e teste a restauração.',
    'Cubra a webcam quando não estiver em uso.',
    'Verifique configurações de privacidade em redes sociais.',
    'Use passkeys quando disponíveis em vez de senhas.',
    'Habilite proteções contra SIM swap junto à operadora.',
    'Nunca compartilhe códigos de verificação com ninguém.',
    'Use PIN/biometria forte no SIM e no aparelho.',
    'Desative Bluetooth/Wi‑Fi quando não estiver usando.',
    'Use uma VPN confiável em redes públicas.',
    'Evite instalar APKs/softwares fora de fontes oficiais.',
    'No desktop, evite executar binários desconhecidos.',
    'Abra documentos suspeitos em sandbox/VM quando possível.',
    'Separe cartões virtuais para compras online.',
    'Ative alertas de transação no banco e cartões.',
    'Use e‑mail com domínio próprio para contas críticas.',
    'Ative SPF, DKIM e DMARC para seu domínio.',
    'Use DNS com filtragem de malware e phishing.',
    'Desabilite macros em documentos por padrão.',
    'Habilite proteção contra rastreamento entre sites no navegador.',
    'Limite dados de localização; use permissões “apenas durante uso”.',
    'Revise apps com acesso ao microfone e câmera.',
    'Evite expor metadados (EXIF) ao compartilhar fotos.',
    'Use mensageiros com criptografia de ponta a ponta.',
    'Ative bloqueio por PIN nas conversas/arquivos sensíveis.',
    'Crie um e‑mail “queimável” para cadastros descartáveis.',
    'Evite responder a e‑mails de phishing; denuncie-os.',
    'Confirme pagamentos via canal secundário antes de transferir.',
    'Desconfie de urgências artificiais em pedidos suspeitos.',
    'Separe dispositivos para finanças e para uso geral quando viável.',
    'Use sistemas operacionais atualizados e mantidos.',
    'Reduza a superfície: desinstale o que não usa.',
    'Ative registro de atividades de login onde houver.',
    'Prefira navegadores em vez de apps quando segurança for prioridade.',
    'Desative execução automática de mídia/USB.',
    'Proteja o roteador doméstico: altere senha e firmware atualizado.',
    'Crie rede Wi‑Fi de convidados para visitantes e IoT.',
    'Evite expor serviços (RDP/SSH) diretamente na internet.',
    'Use chaves SSH protegidas por senha + agente.',
    'Para repositórios, habilite verificação em duas etapas.',
    'Revogue tokens e chaves antigas periodicamente.',
    'Verifique URLs de download e hashes dos arquivos.',
    'Faça auditoria de permissões em contas de nuvem.',
    'Use contêineres/VMs para tarefas arriscadas.',
    'Evite postar informações pessoais que permitam engenharia social.',
    'Ative “Find My Device” e teste o bloqueio remoto.',
    'Mantenha lista de contatos de emergência e plano de resposta.',
    'Monitore vazamentos do seu e‑mail/telefone periodicamente.',
    'Configure alertas de violação de senha no navegador.',
    'Faça logout de sessões em dispositivos compartilhados.',
    'Evite pendrives desconhecidos; use somente os próprios.',
    'Habilite autenticação para aplicativos de e‑mail e calendário.',
    'Use alias de e‑mail para reduzir spam e rastreamento.',
    'Desconfie de QR codes não verificados.',
    'Evite Wi‑Fi “aberto”; confirme SSIDs oficiais.',
    'Minimize dados em formulários; forneça apenas o necessário.',
    'Crie respostas de segurança que não sejam óbvias.',
    'Aplique princípios de menor privilégio em tudo.',
    'Separe usuários/admin no desktop; evite usar admin no dia a dia.',
    'Faça varreduras ocasionais por malware/spyware.',
    'Atualize firmware de dispositivos IoT com regularidade.',
    'Desative UPnP no roteador se não precisar.',
    'Ative logs e notificações para alterações críticas.',
    'Considere eSIM para reduzir risco de troca física de SIM.',
    'Evite responder a ligações desconhecidas com dados pessoais.',
    'Valide domínios com cadeado não é suficiente: confira o endereço.',
    'Use “burner phones” para viagens de alto risco.',
    'Restrinja dados de preenchimento automático de navegador.',
    'Evite armazenar cartões no navegador sem criptografia forte.',
    'Considere autenticação baseada em dispositivo (WebAuthn).',
  ];

  const tipIndex = useSignal(0);
  const tipOrder = useSignal<number[]>([]);

  // Initialize and auto-rotate tips
  useVisibleTask$(() => {
    // Shuffle order once per mount
    const arr = Array.from({ length: OPSEC_TIPS.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    tipOrder.value = arr;
    tipIndex.value = 0;

    const interval = setInterval(() => {
      tipIndex.value = (tipIndex.value + 1) % tipOrder.value.length;
    }, 6000);
    return () => clearInterval(interval);
  });

  // Beware, some god-awful markup ahead (thank Tailwind for that!)
  return (
  <div class="flex justify-center flex-wrap items-stretch gap-6 mb-4 relative">
    <div class="flex justify-center flex-col items-center gap-6">
      {/* Progress Percent */}
      <div class="rounded-box bg-front shadow-md w-96 p-4">
        <h3 class="text-primary text-2xl">Seu Progresso</h3>
        <p class="text-lg">
          Você concluiu <b>{totalProgress.value.completed} de {totalProgress.value.outOf}</b> itens
        </p>
        <progress
          class="progress w-80"
          value={totalProgress.value.completed}
          max={totalProgress.value.outOf}>
        </progress>
      </div>
    
      {/* Completion per level */}
      <div class="carousel rounded-box">
      {items.map((item) => (
        <div
          key={item.id}
          class="flex flex-col justify-items-center carousel-item w-20 p-4
                bg-front shadow-md mx-2.5 rounded-box">
          <div class="relative" id={item.id}></div>
          <p class="text-center">{item.label}</p>
        </div>
        ))}
      </div>
      {/* OPSEC tips carousel + link (size unchanged) */}
      <div class="p-4 rounded-box bg-front shadow-md w-96 flex-grow relative">
        {/* Carousel controls (absolute to avoid changing layout height) */}
        <button
          class="btn btn-ghost btn-xs absolute top-2 right-8"
          aria-label="Anterior"
          onClick$={() => {
            const len = tipOrder.value.length || 1;
            tipIndex.value = (tipIndex.value - 1 + len) % len;
          }}
        >‹</button>
        <button
          class="btn btn-ghost btn-xs absolute top-2 right-2"
          aria-label="Próxima"
          onClick$={() => {
            const len = tipOrder.value.length || 1;
            tipIndex.value = (tipIndex.value + 1) % len;
          }}
        >›</button>

        <p class="text-sm opacity-80 mb-2 pr-12">
          {OPSEC_TIPS[tipOrder.value[tipIndex.value] ?? 0]}
        </p>
        {/* Link removido conforme solicitado */}
      </div>
    </div>

    {/* Radar Chart showing total progress per category and level */}
    <div class="rounded-box bg-front shadow-md w-96 p-4">
      <canvas ref={radarChart} id="myChart"></canvas>
    </div>

    <div class="justify-center flex-col items-center gap-6 hidden xl:flex">
      {/* Remaining Tasks */}
      <div class="p-4 rounded-box bg-front shadow-md w-96 flex-grow">
        <ul>
          { checklists.value.map((section: Section, index: number) => (
              <li key={index}>
                <a
                  href={`/checklist/${section.slug}`}
                  class={[
                    'my-2 w-80 flex justify-between items-center tooltip transition',
                    `hover:text-${section.color}-400`
                  ]}
                  data-tip={`Concluído ${sectionCompletion.value[index]}% de ${section.checklist.length} itens.`}
                >
                <p class="text-sm m-0 flex items-center text-left gap-1 text-nowrap overflow-hidden max-w-40">
                  <Icon icon={section.icon} width={14} />
                  {section.title}
                </p>
                <div class="progress w-36">
                  <span 
                    class={`block h-full transition bg-${section.color}-400`}
                    style={`width: ${sectionCompletion.value[index] || 0}%;`}></span>
                </div>
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
});
