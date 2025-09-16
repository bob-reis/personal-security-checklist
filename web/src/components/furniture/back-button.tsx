import { component$ } from '@builder.io/qwik';

export default component$<{
  label?: string;
}>(({ label = 'Voltar' }) => {
  return (
    <button
      type="button"
      class="btn btn-sm gap-2 text-black bg-[#EB33CC] hover:bg-[#d223b9] border-0 shadow-[0_0_10px_#eb33cc] hover:shadow-[0_0_16px_#d223b9]"
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
