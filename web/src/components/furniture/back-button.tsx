import { component$ } from '@builder.io/qwik';

export default component$<{
  label?: string;
}>(({ label = 'Voltar' }) => {
  return (
    <button
      type="button"
      class="btn btn-sm btn-outline gap-2"
      onClick$={() => {
        if (typeof history !== 'undefined' && history.length > 1) {
          history.back();
        } else {
          location.href = '/';
        }
      }}
    >
      ← {label}
    </button>
  );
});

