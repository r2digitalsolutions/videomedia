import type { Snippet } from "svelte";
import type { MouseEventHandler } from "svelte/elements";

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type ButtonMode = 'default' | 'button';

export type Props = {
  href?: string;
  rounded?: boolean;
  children: Snippet;
  size?: ButtonSize;
  mode?: ButtonMode;
  type?: ButtonType;
  class?: string;
  disabled?: boolean;
  onclick?: MouseEventHandler<HTMLButtonElement>;
};