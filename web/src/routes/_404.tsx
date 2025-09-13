// src/routes/_404.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <h1>404 Não Encontrado</h1>
      <p>A página que você procura não existe.</p>
      <a href="/">Voltar para a página inicial</a>
    </div>
  );
});
