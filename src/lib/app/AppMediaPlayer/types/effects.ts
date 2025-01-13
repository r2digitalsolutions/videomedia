import type { MediaType } from "./media";

export interface Effect {
  id: string;
  name: string;
  category: "filter" | "transition" | "transform";
  type: MediaType | "all";
  properties: {
    css?: Record<string, any>;
    filter?: string;
    transform?: string;
    transition?: {
      duration: number;
      timing: string;
    };
  };
  preview?: string;
}

export const defaultEffects: Effect[] = [
  // Filters
  {
    id: "grayscale",
    name: "Grayscale",
    category: "filter",
    type: "all",
    properties: {
      filter: "grayscale(100%)",
    },
  },
  {
    id: "sepia",
    name: "Sepia",
    category: "filter",
    type: "all",
    properties: {
      filter: "sepia(100%)",
    },
  },
  {
    id: "blur",
    name: "Blur",
    category: "filter",
    type: "all",
    properties: {
      filter: "blur(5px)",
    },
  },
  {
    id: "brightness",
    name: "Brightness",
    category: "filter",
    type: "all",
    properties: {
      filter: "brightness(150%)",
    },
  },
  {
    id: "fade",
    name: "Fade",
    category: "transition",
    type: "all",
    properties: {
      transition: {
        duration: 0.5,
        timing: "ease",
      },
      css: {
        opacity: [0, 1],
      },
    },
  },
  {
    id: "slide-left",
    name: "Slide Left",
    category: "transition",
    type: "all",
    properties: {
      transition: {
        duration: 0.5,
        timing: "ease-out",
      },
      transform: "translateX(-100%)",
    },
  },
  {
    id: "zoom",
    name: "Zoom",
    category: "transition",
    type: "all",
    properties: {
      transition: {
        duration: 0.5,
        timing: "ease-out",
      },
      transform: "scale(0)",
    },
  },
  {
    id: "rotate-3d",
    name: "Rotate 3D",
    category: "transform",
    type: "all",
    properties: {
      transform: "rotate3d(1, 1, 1, 45deg)",
    },
  },
  {
    id: "perspective",
    name: "Perspective",
    category: "transform",
    type: "all",
    properties: {
      transform: "perspective(500px) rotateY(45deg)",
    },
  },
];
