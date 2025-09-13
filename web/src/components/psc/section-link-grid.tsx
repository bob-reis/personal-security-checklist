import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

import { useLocalStorage } from "~/hooks/useLocalStorage";
import type { Checklist, Section } from '~/types/PSC';
import Icon from '~/components/core/icon';
import styles from './psc.module.css';

export default component$((props: { sections: Section[] | any }) => {

  // Create signals to store the number of items done or ignored per section
  const completions =  useSignal<number[]>();
  const done =  useSignal<number[]>();

  // pt-BR translations for section cards (title/description)
  const pt: Partial<Record<string, { title: string; description: string }>> = {
    'authentication': {
      title: 'Autenticação',
      description: 'Protegendo as credenciais de login das suas contas online',
    },
    'web-browsing': {
      title: 'Navegação na Web',
      description: 'Evitando rastreamento, censura e coleta de dados online',
    },
    'email': {
      title: 'E-mail',
      description: 'Protegendo a porta de entrada das suas contas online',
    },
    'messaging': {
      title: 'Mensagens',
      description: 'Mantendo suas comunicações privadas e seguras',
    },
    'social-media': {
      title: 'Redes Sociais',
      description: 'Minimizando os riscos associados ao uso de comunidades online',
    },
    'networks': {
      title: 'Redes',
      description: 'Salvaguardando o tráfego da sua rede',
    },
    'mobile-devices': {
      title: 'Dispositivos Móveis',
      description: 'Reduzindo o rastreamento invasivo de celulares e tablets',
    },
    'personal-computers': {
      title: 'Computadores Pessoais',
      description: 'Protegendo o sistema, dados e atividade do seu PC',
    },
    'smart-home': {
      title: 'Casa Inteligente',
      description: 'Usando dispositivos IoT sem comprometer sua privacidade',
    },
    'personal-finance': {
      title: 'Finanças Pessoais',
      description: 'Protegendo seus fundos, contas e transações financeiras',
    },
    'human-aspect': {
      title: 'Fator Humano',
      description: 'Evitando riscos de segurança por engenharia social',
    },
    'physical-security': {
      title: 'Segurança Física',
      description: 'Adotando medidas para prevenir incidentes no mundo real',
    },
  };

  // Get the IDs of completed and ignore items from local storage
  const [checked] = useLocalStorage('PSC_PROGRESS', {});
  const [ignored] = useLocalStorage('PSC_IGNORED', {});

  /**
   * Get the percentage of completion for a given section
   * using completion data from local storage, and disregarding ignored items
   */
  const getPercentCompletion = $((section: Section): number => {
    const id = (item: Checklist) => item.point.toLowerCase().replace(/ /g, '-')
    const total = section.checklist.filter((item) => !ignored.value[id(item)]).length;
    const done = section.checklist.filter((item) => checked.value[id(item)]).length;
    if (!total) return 0;
    return Math.round((done / total) * 100);
  });

  // On load (in browser only), calculate and set completion data for sections
  useOnWindow('load', $(async () => {
    const sectionsArr: Section[] = Array.isArray(props.sections) ? props.sections : [];
    // Percentage completion, per section
    completions.value = await Promise.all(sectionsArr.map(section => 
      getPercentCompletion(section),
    ));
    // Count of completed items, per section
    done.value = await Promise.all(sectionsArr.map(section => 
      section.checklist.filter(
        (item) => checked.value[item.point.toLowerCase().replace(/ /g, '-')],
      ).length
    ));
  }));

  return (
    <div class={[styles.container, 'grid',
      'mx-auto mt-8 px-4 gap-7', 'xl:px-10 xl:max-w-7xl',
      'transition-all', 'max-w-6xl w-full']}>
      {(Array.isArray(props.sections) ? props.sections : []).map((section: Section, index: number) => (                   
        <a key={section.slug}
          href={`/checklist/${section.slug}`}
          class={[
            'card card-side bg-front bg-opacity-25 shadow-md transition-all px-2',
            `outline-offset-2 outline-${section.color}-400`,
            'hover:outline hover:outline-10 hover:outline-offset-4 hover:bg-opacity-15',
            `hover:bg-${section.color}-600`
          ]}
        >
          <div class="flex-shrink-0 flex flex-col py-4 h-auto items-stretch justify-evenly">
            <Icon icon={section.icon || 'star'} color={section.color} />
            {(done.value && done.value[index]) ? (
              <p class={`text-${section.color}-400 pt-2 pb-0 px-0 mx-0 my-0`}>
                {done.value[index]}/{section.checklist.length} Concluídas
              </p>
            ) : (
              <p class={`text-${section.color}-400 pt-2 pb-0 px-0 mx-0 my-0`}>
                {section.checklist.length} Itens
              </p>
            )}
          </div>
          <div class="card-body flex-grow py-2 pl-4 pr-0">
            <h2 class={`card-title text-${section.color}-400 hover:text-${section.color}-500`}>
              {pt[section.slug]?.title || section.title}
            </h2>
            <p class="p-0">{pt[section.slug]?.description || section.description}</p>
            {(completions.value && completions.value[index]) ? (
              <div
                class={['radial-progress absolute right-2 top-2 scale-75', `text-${section.color}-400`]}
                style={`--value:${completions.value[index]}; --size: 2.5rem;`}
                role="progressbar">
                  <span class="text-xs">{completions.value[index]}%</span>
              </div>
            ) : (
              <span class="absolute right-2 top-2 opacity-30 text-xs">
                Ainda não iniciado
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
});
