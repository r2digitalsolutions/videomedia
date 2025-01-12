import type { TabItem } from "$lib/app/AppMediaPlayer/types/tabs";
import type { Snippet } from "svelte";

export type Props = {
  tabs: TabItem[];
  onChange?: (tab: TabItem) => void;
  activeTab?: TabItem["id"];
  children?: Snippet;
  left?: boolean;
};