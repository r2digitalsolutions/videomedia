import { getContext, setContext } from "svelte";
import { KEY, type fnOnChange } from "./type";

export class ToolbarStore {
  #activeMenu: string | null = $state(null);
  #onchange: fnOnChange = $state(null);

  constructor(onchange: fnOnChange) {
    this.#onchange = onchange;

    if (!getContext(KEY)) {
      setContext(KEY, this);
    }
  }

  get activeMenu() {
    return this.#activeMenu;
  }

  set activeMenu(value: string | null) {
    this.#activeMenu = value;

    this.#onchange?.(value);
  }
}

export const useToolbarStore: () => ToolbarStore = () => {
  const store = getContext(KEY) as ToolbarStore;
  if (!store) {
    throw new Error('Toolbar store not found');
  }
  return store;
};