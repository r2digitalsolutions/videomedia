import type { Shortcut } from "../stores/ShortcutsStore.svelte";

export const shortcuts: Shortcut[] = [
  {
    key: " ",
    description: "Play/Pause",
    action: () => {
      console.log("Play/Pause");
    },
  },
  {
    key: "Home",
    description: "Go to start",
    action: () => { },
  },
  {
    key: "End",
    description: "Go to end",
    action: () => { },
  },
  {
    key: "ArrowLeft",
    description: "Previous frame",
    action: () => { },
  },
  {
    key: "ArrowRight",
    description: "Next frame",
    action: () => { },
  },
  {
    key: ".",
    description: "Toggle variable editor",
    action: () => { },
  },
  {
    key: "Escape",
    description: "Clear selection",
    action: () => { },
  },
  {
    key: "Delete",
    description: "Delete selected content",
    action: () => { },
  },
  {
    key: "z",
    ctrlKey: true,
    description: "Undo",
    action: () => console.log("Undo"),
  },
  {
    key: "z",
    ctrlKey: true,
    shiftKey: true,
    description: "Redo",
    action: () => console.log("Redo"),
  },
  {
    key: "c",
    ctrlKey: true,
    description: "Copy",
    action: () => console.log("Copy"),
  },
  {
    key: "x",
    ctrlKey: true,
    description: "Cut",
    action: () => console.log("Cut"),
  },
  {
    key: "v",
    ctrlKey: true,
    description: "Paste",
    action: () => console.log("Paste"),
  },
  {
    key: "s",
    ctrlKey: true,
    description: "Save project",
    action: () => { },
  },
  {
    key: "s",
    ctrlKey: true,
    shiftKey: true,
    description: "Save project as",
    action: () => console.log("Save project as"),
  },
  {
    key: "e",
    ctrlKey: true,
    description: "Export project",
    action: () => { },
  },
  {
    key: "n",
    ctrlKey: true,
    description: "New project",
    action: () => { },
  },
  {
    key: "o",
    ctrlKey: true,
    description: "Open project",
    action: () => { },
  },
];