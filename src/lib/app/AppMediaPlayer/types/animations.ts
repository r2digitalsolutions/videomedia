export interface Keyframe {
  time: number; // 0-1 range
  properties: {
    opacity?: number;
    scale?: number;
    rotate?: number;
    translateX?: number;
    translateY?: number;
    objectPosition?: string;
  };
}

export interface TimelineAnimation {
  id: string;
  startTime: number;
  duration: number;
  animation: Animation;
}

export interface Animation {
  id: string;
  name: string;
  category: "entrance" | "exit" | "emphasis" | "loop";
  duration: number;
  keyframes: Keyframe[];
  easing: string;
  delay?: number;
  iterationCount?: number | "infinite";
}

export const defaultAnimations: Animation[] = [
  {
    id: "fade-in",
    name: "Fade In",
    category: "entrance",
    duration: 1,
    easing: "ease-out",
    keyframes: [
      { time: 0, properties: { opacity: 0 } },
      { time: 1, properties: { opacity: 1 } },
    ],
  },
  {
    id: "slide-up",
    name: "Slide Up",
    category: "entrance",
    duration: 1,
    easing: "ease-out",
    keyframes: [
      { time: 0, properties: { translateY: 100 } },
      { time: 1, properties: { translateY: 0 } },
    ],
  },
  {
    id: "zoom-in",
    name: "Zoom In",
    category: "entrance",
    duration: 1,
    easing: "ease-out",
    keyframes: [
      { time: 0, properties: { opacity: 0, scale: 0.5 } },
      { time: 1, properties: { opacity: 1, scale: 1 } },
    ],
  },
  {
    id: "fade-out",
    name: "Fade Out",
    category: "exit",
    duration: 1,
    easing: "ease-in",
    keyframes: [
      { time: 0, properties: { opacity: 1 } },
      { time: 1, properties: { opacity: 0 } },
    ],
  },
  {
    id: "slide-down",
    name: "Slide Down",
    category: "exit",
    duration: 1,
    easing: "ease-in",
    keyframes: [
      { time: 0, properties: { translateY: 0 } },
      { time: 1, properties: { translateY: 100 } },
    ],
  },
  {
    id: "slide-left",
    name: "Slide Left",
    category: "entrance",
    duration: 1,
    easing: "ease-in",
    keyframes: [
      { time: 0, properties: { translateX: 0 } },
      { time: 1, properties: { translateX: -100 } },
    ],
  },
  {
    id: "slide-right",
    name: "Slide Right",
    category: "entrance",
    duration: 1,
    easing: "ease-in",
    keyframes: [
      { time: 0, properties: { translateX: 0 } },
      { time: 1, properties: { translateX: 100 } },
    ],
  },
  {
    id: "zoom-out",
    name: "Zoom Out",
    category: "exit",
    duration: 1,
    easing: "ease-in",
    keyframes: [
      { time: 0, properties: { opacity: 1, scale: 1 } },
      { time: 1, properties: { opacity: 0, scale: 0.5 } },
    ],
  },
  {
    id: "bounce",
    name: "Bounce",
    category: "emphasis",
    duration: 0.8,
    easing: "ease-in-out",
    keyframes: [
      { time: 0, properties: { scale: 1 } },
      { time: 0.5, properties: { scale: 1.2 } },
      { time: 1, properties: { scale: 1 } },
    ],
  },
  {
    id: "shake",
    name: "Shake",
    category: "emphasis",
    duration: 0.8,
    easing: "linear",
    keyframes: [
      { time: 0, properties: { translateX: 0 } },
      { time: 0.25, properties: { translateX: -10 } },
      { time: 0.5, properties: { translateX: 10 } },
      { time: 0.75, properties: { translateX: -10 } },
      { time: 1, properties: { translateX: 0 } },
    ],
  },
  {
    id: "pulse",
    name: "Pulse",
    category: "emphasis",
    duration: 0.5,
    easing: "ease-in-out",
    keyframes: [
      { time: 0, properties: { scale: 1 } },
      { time: 0.5, properties: { scale: 1.1 } },
      { time: 1, properties: { scale: 1 } },
    ],
  },

  // Loop Animations
  {
    id: "rotate",
    name: "Rotate",
    category: "loop",
    duration: 2,
    easing: "linear",
    iterationCount: "infinite",
    keyframes: [
      { time: 0, properties: { rotate: 0 } },
      { time: 1, properties: { rotate: 360 } },
    ],
  },
  {
    id: "float",
    name: "Float",
    category: "loop",
    duration: 3,
    easing: "ease-in-out",
    iterationCount: "infinite",
    keyframes: [
      { time: 0, properties: { translateY: 0 } },
      { time: 0.5, properties: { translateY: -10 } },
      { time: 1, properties: { translateY: 0 } },
    ],
  },
  {
    id: "pulse-loop",
    name: "Pulse Loop",
    category: "loop",
    duration: 2,
    easing: "ease-in-out",
    iterationCount: "infinite",
    keyframes: [
      { time: 0, properties: { scale: 1 } },
      { time: 0.5, properties: { scale: 1.1 } },
      { time: 1, properties: { scale: 1 } },
    ],
  },
  {
    id: "pan-left-right",
    name: "Pan Left to Right",
    category: "loop",
    duration: 5,
    easing: "linear",
    iterationCount: "infinite",
    keyframes: [
      {
        time: 0,
        properties: { objectPosition: "0% 50%" },
      },
      {
        time: 1,
        properties: { objectPosition: "100% 50%" },
      },
    ],
  },
  {
    id: "pan-right-left",
    name: "Pan Right to Left",
    category: "loop",
    duration: 5,
    easing: "linear",
    iterationCount: "infinite",
    keyframes: [
      {
        time: 0,
        properties: { objectPosition: "100% 50%" },
      },
      {
        time: 1,
        properties: { objectPosition: "0% 50%" },
      },
    ],
  },
  {
    id: "pan-top-bottom",
    name: "Pan Top to Bottom",
    category: "loop",
    duration: 5,
    easing: "linear",
    iterationCount: "infinite",
    keyframes: [
      {
        time: 0,
        properties: { objectPosition: "50% 0%" },
      },
      {
        time: 1,
        properties: { objectPosition: "50% 100%" },
      },
    ],
  },
  {
    id: "pan-bottom-top",
    name: "Pan Bottom to Top",
    category: "loop",
    duration: 5,
    easing: "linear",
    iterationCount: "infinite",
    keyframes: [
      {
        time: 0,
        properties: { objectPosition: "50% 100%" },
      },
      {
        time: 1,
        properties: { objectPosition: "50% 0%" },
      },
    ],
  },
];
