import { ToggleStore } from "$lib/stores/ToggleStore.svelte";
import { getContext, setContext } from "svelte";
import { KEY } from "./type";
import { on } from "svelte/events";

type ModalAction = {
  onClose: () => void;
}

export class ModalStore extends ToggleStore {
  #actions: Partial<ModalAction> = $state({});

  constructor(initialOpen: boolean = false, actions: Partial<ModalAction> = {}) {
    super(initialOpen);
    this.#actions = actions;

    if (!getContext(KEY)) {
      setContext(KEY, this);
    }
  }

  onClose = () => {
    this.open = false;
    this.#actions.onClose?.();
  }

  onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClose();
    }
  }

  effect(open: boolean, ref: HTMLDivElement | undefined = undefined) {
    this.open = open;

    if (ref) {
      document.body.appendChild(ref);
    }

    if (!open) {
      this.#actions.onClose?.();
      if (ref) {
        setTimeout(() => {
          document.body.removeChild(ref);
        }, 50);
      }
    }

    const event = on(window, 'keydown', this.onKeyDown);

    return () => {
      event();
    }
  }
}

export const useModalStore = () => {
  if (!getContext(KEY)) {
    throw new Error('useModalStore must be used within a Modal component');
  }

  return getContext(KEY) as ModalStore;
};
