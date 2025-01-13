export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Crop {
  zoom: number;
  x: number;
  y: number;
}

export type TextAlign = "left" | "center" | "right";
export type ObjectFit = "cover" | "contain" | "fill" | "none";

export interface ContentStyle {
  position?: Position;
  size?: Size;
  scale?: number;
  rotate?: number;
  opacity?: number;
  zIndex?: number;
  fontFamily?: string;
  filter?: {
    brightness?: number;
    contrast?: number;
    saturate?: number;
    blur?: number;
  };
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  transition?: string;
  padding?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: number;
  textAlign?: TextAlign;
  lineHeight?: number;
  letterSpacing?: number;
  fontStyle?: string;
  textTransform?: string;
  textShadowColor?: string;
  textShadowOffset?: Position;
  textShadowBlur?: number;
  transform?: string;
  crop?: Crop;
  objectPosition?: string;
}