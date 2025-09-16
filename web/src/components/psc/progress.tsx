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
  // Local storage for closing and ignoring the welcome dialog
  const [ignoreDialog, setIgnoreDialog] = useLocalStorage('PSC_CLOSE_WELCOME', false);
  // Store to hold calculated progress results
  const totalProgress = useSignal({ completed: 0, outOf: 0 });
  // Ref to the radar chart canvas and instance
  const radarChart  = useSignal<HTMLCanvasElement>();
  const chartInstance = useSignal<Chart | null>(null);
  // Completion data for each section
  const sectionCompletion =  useSignal<number[]>([]);

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

  // (Removed legacy window-load handlers; logic moved to useVisibleTask$ above)

  // Random tips for the small card (keeps same layout/size)
  const tips = [
    'Use senhas únicas e um gerenciador de senhas.',
    'Ative 2FA em contas importantes (app autenticador).',
    'Mantenha navegador e extensões sempre atualizados.',
    'Evite links suspeitos e verifique remetentes de e‑mail.',
    'Faça backups regulares e teste a restauração.',
    'Criptografe seu dispositivo e bloqueie a tela.',
    'Revogue apps e sessões antigas nas suas contas.',
    'Prefira navegadores com bloqueio de rastreadores.',
  ];
  const currentTip = useSignal('');

  // Recompute progress and charts when storage or data changes; set a random tip
  useVisibleTask$(async ({ track, cleanup }) => {
    track(() => checkedItems.value);
    track(() => ignoredItems.value);
    track(() => checklists.value);

    // Pick a tip (once per visibility/recalc)
    if (!currentTip.value) {
      currentTip.value = tips[Math.floor(Math.random() * tips.length)] || tips[0];
    }

    // Update totals
    totalProgress.value = await calculateProgress(checklists.value as Sections);

    // Update per-level progress bars
    const containers = ['#essential-container', '#optional-container', '#advanced-container'];
    containers.forEach((sel) => {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) el.innerHTML = '';
    });
    const essential = await filterByPriority(checklists.value as Sections, 'essential');
    const optional = await filterByPriority(checklists.value as Sections, 'optional');
    const advanced = await filterByPriority(checklists.value as Sections, 'advanced');
    const essentialPct = Math.round((await calculateProgress(essential)).completed / Math.max((await calculateProgress(essential)).outOf, 1) * 100);
    const optionalPct = Math.round((await calculateProgress(optional)).completed / Math.max((await calculateProgress(optional)).outOf, 1) * 100);
    const advancedPct = Math.round((await calculateProgress(advanced)).completed / Math.max((await calculateProgress(advanced)).outOf, 1) * 100);
    await drawProgress(essentialPct, '#essential-container');
    await drawProgress(optionalPct, '#optional-container');
    await drawProgress(advancedPct, '#advanced-container');

    // Update radar chart values
    sectionCompletion.value = await Promise.all((checklists.value as Sections).map((section: Section) => {
      const id = (pt: string) => pt.toLowerCase().replace(/ /g, '-');
      const total = section.checklist.filter((i) => !ignoredItems.value[id(i.point)]).length;
      const done = section.checklist.filter((i) => checkedItems.value[id(i.point)]).length;
      return total ? Math.round((done / total) * 100) : 0;
    }));

    // (Re)draw radar chart
    if (chartInstance.value) {
      chartInstance.value.destroy();
      chartInstance.value = null;
    }
    if (radarChart.value) {
      // Ensure Chart.js is registered
      Chart.register(...registerables);
      const ctx = radarChart.value.getContext('2d');
      if (ctx) {
        const labels = (checklists.value as Sections).map((s: Section) => s.title);
        chartInstance.value = new Chart(ctx, {
          type: 'radar',
          data: {
            labels,
            datasets: [
              {
                label: 'Conclusão por seção',
                data: sectionCompletion.value,
                backgroundColor: 'rgba(34, 197, 94, 0.2)', // green-500 @ 20%
                borderColor: '#22c55e',
                pointBackgroundColor: '#22c55e',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              r: {
                min: 0,
                max: 100,
                grid: { display: true, color: '#7d7d7dd4' },
                angleLines: { color: '#7d7d7dd4' },
                pointLabels: { color: '#9ca3af', font: { size: 10 } },
                ticks: { display: false },
              },
            },
            plugins: {
              legend: { position: 'bottom', labels: { font: { size: 10 } } },
              tooltip: {
                callbacks: {
                  label: (ctx) => `Concluído ${Math.round(ctx.parsed.r)}% de ${ctx.dataset.label || ''}`,
                },
              },
            },
          },
        });
      }
    }
  });


  // (Removed legacy radar data builder; radar chart now populated in useVisibleTask$)


  const items = [
    { id: 'essential-container', label: 'Essencial' },
    { id: 'optional-container', label: 'Opcional' },
    { id: 'advanced-container', label: 'Avançado' },
  ];

  // Beware, some god-awful markup ahead (thank Tailwind for that!)
  return (
  <div class="flex justify-center flex-wrap items-stretch gap-6 mb-4 relative">
    {(!ignoreDialog.value && (!Object.keys(checkedItems.value).length) ) && (
    <div class="
      px-16 py-8 top-1/3 z-10 max-w-lg
      absolute flex flex-col justify-center bg-gray-600 rounded-md bg-clip-padding
      backdrop-filter backdrop-blur-md bg-opacity-40 border border-stone-800">
        <button
          class="absolute top-1 right-1 btn btn-sm opacity-50"
          onClick$={() => setIgnoreDialog(true)}
          >Fechar</button>
        <p class="text-xl block text-center font-bold">Sem estatísticas ainda</p>
        <p class="w-md text-left my-2">Você verá seu progresso aqui quando começar a marcar os itens das checklists</p>
        <p class="w-md text-left my-2">Comece selecionando uma checklist abaixo</p>
      </div>
    )}

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
      {/* Tips card (random tip, same layout/size) */}
      <div class="p-4 rounded-box bg-front shadow-md w-96 flex-grow">
        <p class="text-sm opacity-80 mb-2">Dica rápida de segurança:</p>
        <p class="text-lg">{currentTip.value}</p>
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
