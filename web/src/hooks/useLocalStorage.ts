import { $, type QRL, useOnWindow, useStore } from "@builder.io/qwik";

export function useLocalStorage(key: string, initialState: any): [any, QRL<(value: any) => void>]  {
  const store = useStore({ value: initialState });

  useOnWindow('load', $(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialState));
      }
      store.value = item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.log(error);
      store.value = initialState;
    }
  }));

  // Keep store in sync when returning to the page or when other parts
  // of the app update the same key.
  useOnWindow('visibilitychange', $(() => {
    try {
      if (document.visibilityState === 'visible') {
        const item = window.localStorage.getItem(key);
        store.value = item ? JSON.parse(item) : initialState;
      }
    } catch (error) {
      console.log(error);
    }
  }));

  // Listen for custom updates triggered by this hook's setter elsewhere
  useOnWindow('PSC_STORAGE_UPDATED', $((ev: any) => {
    try {
      if (!ev?.detail || ev.detail.key === key) {
        const item = window.localStorage.getItem(key);
        store.value = item ? JSON.parse(item) : initialState;
      }
    } catch (error) {
      console.log(error);
    }
  }));

  const setValue$ = $((value: any) => {
    try {
      store.value = value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
        // Notify listeners in the same tab so they can refresh derived UI
        window.dispatchEvent(new CustomEvent('PSC_STORAGE_UPDATED', { detail: { key } }));
      }
    } catch (error) {
      console.log(error);
    }
  });

  return [store, setValue$];
}
