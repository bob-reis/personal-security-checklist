import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import SectionLinkGrid from "~/components/psc/section-link-grid";
import Hero from "~/components/furniture/hero";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';

import { useChecklist } from '~/store/local-checklist-store';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);

  const localChecklist = useChecklist();

  return (
    <>
      <Hero />
      <Progress />
      <SectionLinkGrid
        sections={
          (Array.isArray(localChecklist.checklist.checklist) && localChecklist.checklist.checklist.length > 0)
            ? localChecklist.checklist.checklist
            : checklists.value
      }
    />
    </>
  );
});

export const head: DocumentHead = {
  title: "Defesa Digital",
  meta: [
    {
      name: "description",
      content: "A lista definitiva de segurança pessoal para proteger sua vida digital.",
    },
  ],
};
