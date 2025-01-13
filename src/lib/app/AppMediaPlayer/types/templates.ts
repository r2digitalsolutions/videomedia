import previewImage from "$lib/assets/img/preview.jpeg";

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  category: "intro" | "outro" | "lower-third" | "title" | "custom";
  tracks: {
    type: "video" | "text" | "audio";
    contents: {
      text?: string;
      style?: {
        fontSize: number;
        color: string;
        fontWeight: string;
        position?: { x: number; y: number };
      };
      startTime: number;
      duration: number;
    }[];
  }[];
}

export const defaultTemplates: Template[] = [
  {
    id: "simple-intro",
    name: "Simple Intro",
    thumbnail: previewImage,
    category: "intro",
    tracks: [
      {
        type: "text",
        contents: [
          {
            text: "Your Title Here",
            style: {
              fontSize: 48,
              color: "#ffffff",
              fontWeight: "bold",
              position: { x: 50, y: 40 },
            },
            startTime: 0,
            duration: 3,
          },
          {
            text: "Subtitle Text",
            style: {
              fontSize: 24,
              color: "#ffffff",
              fontWeight: "normal",
              position: { x: 50, y: 60 },
            },
            startTime: 0.5,
            duration: 2.5,
          },
        ],
      },
    ],
  },
  {
    id: "lower-third",
    name: "Modern Lower Third",
    thumbnail: previewImage,
    category: "lower-third",
    tracks: [
      {
        type: "text",
        contents: [
          {
            text: "Name",
            style: {
              fontSize: 32,
              color: "#ffffff",
              fontWeight: "bold",
              position: { x: 20, y: 80 },
            },
            startTime: 0,
            duration: 5,
          },
          {
            text: "Title / Description",
            style: {
              fontSize: 20,
              color: "#cccccc",
              fontWeight: "normal",
              position: { x: 20, y: 88 },
            },
            startTime: 0.3,
            duration: 4.7,
          },
        ],
      },
    ],
  },
];
