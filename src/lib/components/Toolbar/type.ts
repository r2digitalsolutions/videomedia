import type { Snippet } from "svelte";
import type { DropdownItem } from "../DropdownMenu.svelte";

export const KEY = Symbol('TOOLBAR');
export type fnOnChange = undefined | null | ((value: string | null) => void);

export type ToolbarItem =
  | {
    type: 'separator';
  }
  | {
    type: 'button';
    label: string;
    onclick: () => void;
  }
  | {
    type: 'dropdown';
    label: string;
    items: DropdownItem[];
  };

export type Props = {
  title: string;
  menu: ToolbarItem[];
  center?: Snippet;
  right?: Snippet;
  bottom?: Snippet;
  onChangeMenu?: fnOnChange;
};