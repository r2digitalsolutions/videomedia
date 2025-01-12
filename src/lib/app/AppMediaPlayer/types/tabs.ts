import { FolderOpen, Grid, Layout, Music, Settings, Type, Video } from "lucide-svelte";

export type Tab =
  | "templates"
  | "media"
  | "text"
  | "video"
  | "audio"
  | "settings"
  | "collage"
  | "properties"
  | "effects"
  | "animations"
  | "keyframes";

export const tabs: TabItem[] = [
  { id: "templates", icon: Layout, label: "Templates" },
  { id: "media", icon: FolderOpen, label: "Media" },
  { id: "collage", icon: Grid, label: "Collages" },
  { id: "text", icon: Type, label: "Text" },
  { id: "video", icon: Video, label: "Video" },
  { id: "audio", icon: Music, label: "Audio" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export type TabItem = {
  id: Tab;
  icon: any;
  label: string;
};

export const TABS_EDITOR_ID = {
  PROPERTIES: "properties",
  EFFECTS: "effects",
  ANIMATIONS: "animations",
  KEYFRAMES: "keyframes",
} as const;
