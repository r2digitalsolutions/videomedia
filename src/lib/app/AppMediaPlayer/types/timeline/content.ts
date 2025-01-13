import type { MediaType } from "../media";
import type { ContentStyle, ObjectFit } from "./style";

export interface BaseContent {
  id: string;
  startTime: number;
  duration: number;
  style?: ContentStyle;
  effects?: any[];
  animations?: any[];
  selected?: boolean;
}

export interface TextContent extends BaseContent {
  text: string;
}

export interface MediaContent extends BaseContent {
  url: string;
  type: MediaType;
  mediaId: string;
  objectFit?: ObjectFit;
  volume?: number;
  playbackSpeed?: number;
}