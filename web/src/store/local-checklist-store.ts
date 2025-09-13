
import { $, useStore, useOnWindow } from '@builder.io/qwik';
import jsyaml from 'js-yaml';
import type { Sections } from '~/types/PSC';

export const useChecklist = () => {
  const state = useStore<{ checklist: Sections | null }>({ checklist: null });

  const fetchChecklist = $(async () => {
    const localUrl = '/personal-security-checklist.yml';
    return fetch(localUrl)
      .then((res) => res.text())
      .then((yamlText) => {
        const parsed: any = jsyaml.load(yamlText);
        // Normalize: support both array root or object with `sections`
        return Array.isArray(parsed) ? parsed : (parsed?.sections || []);
      });
  });

  useOnWindow('load', $(() => {
    fetchChecklist().then((checklist) => {
      // Only override if we actually loaded a non-empty array
      if (Array.isArray(checklist) && checklist.length > 0) {
        state.checklist = checklist as Sections;
      }
    });
  }));

  const setChecklist = $((newChecklist: Sections) => {
    state.checklist = newChecklist;
  });

  return { checklist: state, setChecklist };
};
