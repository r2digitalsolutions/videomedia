export const shortcuts = (isMac: boolean) => {
  const commandControl = isMac ? "⌘" : "Ctrl";

  return [
    {
      category: "Playback",
      items: [
        { keys: ["Space"], description: "Play/Pause" },
        { keys: ["Home"], description: "Go to start" },
        { keys: ["End"], description: "Go to end" },
        { keys: ["←"], description: "Previous frame" },
        { keys: ["→"], description: "Next frame" },
      ],
    },
    {
      category: "Edit",
      items: [
        { keys: [commandControl, "Z"], description: "Undo" },
        { keys: [commandControl, "⇧", "Z"], description: "Redo" },
        { keys: [commandControl, "X"], description: "Cut" },
        { keys: [commandControl, "C"], description: "Copy" },
        { keys: [commandControl, "V"], description: "Paste" },
        { keys: ["Delete"], description: "Delete selected" },
        { keys: ["Esc"], description: "Clear selection" },
      ],
    },
    {
      category: "File",
      items: [
        { keys: [commandControl, "N"], description: "New project" },
        { keys: [commandControl, "O"], description: "Open project" },
        { keys: [commandControl, "S"], description: "Save project" },
        { keys: [commandControl, "⇧", "S"], description: "Save project as" },
        { keys: [commandControl, "E"], description: "Export project" },
      ],
    },
  ];
};
