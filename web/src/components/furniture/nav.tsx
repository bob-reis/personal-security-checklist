
import { $, component$, useContext } from "@builder.io/qwik";
import Icon from "~/components/core/icon";
import type { Section } from '~/types/PSC';
import articles from '~/data/articles';
import { ChecklistContext } from '~/store/checklist-context';


export default component$(() => {

  const data = useContext(ChecklistContext);

  // Dark mode only: theme selection removed

    const deleteAllData = $(() => {
    const isConfirmed = confirm('Tem certeza de que deseja apagar todos os dados locais? Isso vai apagar seu progresso.');
    if (isConfirmed) {
      localStorage.clear();
      location.reload();
    }
  });

  return (
    <>
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="navbar bg-[#000000] items-start py-0 min-h-[90px] w-full">
        <div class="flex-1">
          <div class="flex-none md:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <a href="/" class="flex items-start">
            <div
              aria-label="Logo"
              style={{
                backgroundImage: "url('/pptech-logo.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top left',
                width: '185px',
                height: '130px',
                filter: 'drop-shadow(0 0 15px rgba(235, 51, 204, 0.4)) drop-shadow(0 0 30px rgba(235, 51, 204, 0.2))',
              }}
            />
          </a>
        </div>
        <div class="flex-none hidden md:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <Icon icon="checklist" width={16} height={16}  />
                  Checklists
                </summary>
                <ul class="p-2 bg-base-100 rounded-t-none z-10">
                  {data.value.map((item: Section, index: number) => (
                    <li key={`checklist-nav-${index}`} class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
                      <a href={`/checklist/${item.slug}`}>
                      <Icon color={item.color} class="mr-2" icon={item.icon} width={16} height={16}  />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
          {/* Theme toggle removed: dark mode only */}
          <li class="list-none px-2">
            <p
              onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).showModal()}
              class="cursor-pointer tooltip flex tooltip-bottom" data-tip="Configurações">
                <Icon icon="settings" width={20} height={20}  />
            </p>
          </li>
        </div>
      </div>

      <div class="drawer-side z-10">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="rounded-box menu p-4 w-80 min-h-full bg-base-200">
          <h2 class="flex text-primary">
          <Icon class="mr-2" icon="shield" width={16} height={16}  />
            Defesa Digital
          </h2>
          <li><a href="/"><Icon class="mr-2" icon="homepage" width={16} height={16}  />Início</a></li>
          <li>
            <a href="/checklist"><Icon class="mr-2" icon="all" width={16} height={16} />Checklists</a>
            <ul>
              {data.value.map((item: Section, index: number) => (
              <li key={`checklist-side-${index}`} class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
                <a href={`/checklist/${item.slug}`}>
                <Icon color={item.color} class="mr-2" icon={item.icon} width={16} height={16}  />
                  {item.title}
                </a>
              </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/article">
              <Icon class="mr-2" icon="articles" width={16} height={16} />Artigos
            </a>
            <ul>
              {articles.map(article => (
                <li key={article.slug}>
                  <a href={`/article/${article.slug}`}>{article.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/about">
              <Icon class="mr-2" icon="about" width={16} height={16} />Sobre
            </a>
            <ul>
              <li>
                <a href="https://github.com/Lissy93/personal-security-checklist/?tab=readme-ov-file#contributing">Contribuindo</a>
              </li>
              <li>
                <a href="https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE">Licença</a>
              </li>
            </ul>
            <ul>
            <li>
              <a href="/about#author">Autora</a>
              <ul>
                <li><a href="https://aliciasykes.com/contact">Contato</a></li>
                <li>
                  <a href="https://apps.aliciasykes.com">Mais Apps</a>
                </li>
                <li class="flex flex-row">
                  <a href="https://github.com/lissy93"><Icon icon="hub" width={16} height={16} /></a>
                  <a href="https://x.com/lissy_sykes"><Icon icon="twitter" width={16} height={16} /></a>
                  <a href="https://mastodon.social/@lissy93"><Icon icon="mastodon" width={16} height={16} /></a>
                  <a href="https://dev.to/lissy93"><Icon icon="dev" width={16} height={16} /></a>
                  <a href="https://linkedin.com/in/aliciasykes"><Icon icon="linkedin" width={16} height={16} /></a>
                </li>
              </ul>
            </li>
            </ul>
          </li>
        </ul>
      </div>

      <dialog id="settings_modal" class="modal">
        <div class="modal-box">
          <div class="tabs tabs-lifted">
            <p class="tab tab-active">Configurações</p>
          </div>
          <div class="modal-action justify-start w-full flex flex-col gap-4">
              {/* Theme selection removed: dark mode only */}
              <div class="flex items-between w-full justify-between">
                <label class="label">Dados</label>
                <button class="btn btn-primary" onClick$={deleteAllData}>Apagar Tudo</button>
              </div>
              <button
                class="btn my-1 mx-auto"
                onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).close()}
              >Fechar</button>
            </div>
        </div>
      </dialog>
    </>
  );
});
