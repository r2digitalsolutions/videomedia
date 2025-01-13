import type { AnimationConfig } from "svelte/animate";
import type { Effect } from "../effects";
import type { MediaType } from "../media";
import type { ContentStyle, ObjectFit } from "./style";
import type { TimelineAnimation } from "../animations";

export interface Track {
  id: string;
  type: MediaType;
  name: string;
  contents: TrackContent[];
}

export interface TrackContent {
  id: string;
  isVisible?: boolean;
  text?: string | TrackContentVariable;
  effects?: Effect[];
  style?: ContentStyle;
  animation?: any;
  selected?: boolean;
  animations?: TimelineAnimation[];
  objectFit?: ObjectFit;
  startTime: number;
  duration: number;
  mediaId?: string;
  url?: string;
  volume?: number;
  playbackSpeed?: number;
  type?: MediaType;
  animationConfig?: AnimationConfig;
}

export interface TrackContentVariable {
  type: "variables";
  subtype: "locales";
  name: string;
  value?: string;
}

export interface SelectedContent {
  trackId: string;
  contentId: string;
  content: TrackContent;
}
