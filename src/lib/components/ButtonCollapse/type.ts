import type { MouseEventHandler } from "svelte/elements";

export type Props = {
  active?: boolean;
  onclick: MouseEventHandler<HTMLButtonElement>;
}