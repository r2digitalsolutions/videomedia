import { ToggleStore } from "$lib/stores/ToggleStore.svelte";
import { on } from "svelte/events";

export type Shortcut = {
  key: string;
  description: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
};

export class ShortcutsStore extends ToggleStore {
  #shortcuts: Shortcut[] = $state([]);

  constructor(initialOpen: boolean = false, shortcuts: Shortcut[] = []) {
    super(initialOpen);
    this.#shortcuts = shortcuts;
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.key === '/') {
      this.toggle();
    }

    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    const shortcut = this.#shortcuts.find(
      (s) =>
        s.key === e.key &&
        !!s.ctrlKey === (e.ctrlKey || e.metaKey) &&
        !!s.shiftKey === e.shiftKey &&
        !!s.altKey === e.altKey,
    );

    if (shortcut) {
      e.preventDefault();
      shortcut.action();
    }
  }

  effect() {
    return on(window, 'keydown', this.onKeyDown);
  }
}