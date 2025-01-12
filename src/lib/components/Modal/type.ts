import type { Snippet } from "svelte";

export const KEY = Symbol('ModalStore');

export type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: Snippet;
}