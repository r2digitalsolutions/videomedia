import { shortcuts } from "../types/shortcuts.svelte";
import { MediaPlayerStore } from "./MediaPlayerStore.svelte";
import { ShortcutsStore } from "./ShortcutsStore.svelte";

export const media_player_store = new MediaPlayerStore();
export const shortcut_store = new ShortcutsStore(false, shortcuts);