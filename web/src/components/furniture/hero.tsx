import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center w-full p-6">
        <div class="w-full flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-12 hover:shadow-3xl transition-all duration-300" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(235, 51, 204, 0.3), 0 0 60px rgba(235, 51, 204, 0.2)">
          <p class="opacity-80 text-2xl">O Guia Definitivo</p>
          <h1 class="text-6xl font-bold" style="color: #EB33CC">Checklist de Segurança Pessoal</h1>
          <p class="subtitle pb-2 opacity-90 text-2xl">Seu guia para proteger sua vida digital e sua privacidade</p>
        </div>
      </div>
    </div>
  );
});
