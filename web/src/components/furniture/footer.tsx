import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/Lissy93/personal-security-checklist/';
  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-[#000000]">
    <aside>
      <p>
        Licenciado sob <a href={licenseLink} class="link link-primary">MIT</a> -
        Este é um Fork do Projeto Original <a href={ghLink} class="link link-primary">Projeto no GitHub</a>
        {' '}de © <a href={authorLink} class="link link-primary">Alicia Sykes</a> 2024
      </p>
    </aside>
  </footer>
  );
});
