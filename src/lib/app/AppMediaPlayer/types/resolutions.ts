import type { TimelineDataStore } from "../stores/TimelineDataStore.svelte";
import type { TrackStore } from "../stores/TrackStore";
import type { Track } from "./timeline/track";

export interface Resolution {
  width: number;
  height: number;
}
export interface ResolutionSelect extends Resolution {
  label: string;
  defaultCreate?: boolean;
}
export const initialCommonResolutions: ResolutionSelect[] = [
  { width: 5040, height: 720, label: "5040x720 (UltraHD)", defaultCreate: true },
  { width: 720, height: 5040, label: "720x5040 (UltraHD)" },
  { width: 1080, height: 3260, label: "1080x3260 (UltraHD)", defaultCreate: true },
  { width: 3260, height: 1080, label: "3260x1080 (UltraHD)", defaultCreate: true },
  { width: 1920, height: 1080, label: "1920x1080 (Full HD)", defaultCreate: true },
  { width: 3840, height: 2160, label: "3840x2160 (4K)" },
  { width: 1280, height: 720, label: "1280x720 (HD)" },
  { width: 1080, height: 1920, label: "1080x1920 (Story)", defaultCreate: true },
  { width: 1080, height: 1080, label: "1080x1080 (Square)", defaultCreate: true },
  { width: 2560, height: 1440, label: "2560x1440 (2K)" },
];

export interface ResolutionPreviewStore {
  current: boolean;
  value: string;
}

export interface ResolutionDataItem {
  locales?: string[];
  stores?: string[];
  markets?: string[];
}

export interface ResolutionData {
  data: ResolutionDataItem;
  tracks: TrackStore[];
}

export type KeyResolution = `${string}x${string}`;

export interface ResolutionMap {
  [key: KeyResolution]: TimelineDataStore;
}

export function getResolutionKey(resolution: Resolution): KeyResolution {
  return `${resolution.width}x${resolution.height}`;
}
