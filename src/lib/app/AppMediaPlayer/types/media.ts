import previewImage from "$lib/assets/img/preview.jpeg";
export type MediaType = "image" | "video" | "audio" | "text" | "media";

export const MEDIA_TYPES: Record<MediaType, MediaType> = {
  image: "image",
  video: "video",
  audio: "audio",
  text: "text",
  media: "media",
} as const;

export interface MediaItem {
  id: string;
  type: MediaType;
  name: string;
  url: string;
  thumbnail?: string;
  duration?: number;
  createdAt: number;
}

export interface MediaLibrary {
  items: MediaItem[];
}

export const MOCK_MEDIA: MediaItem[] = [
  {
    id: "4",
    type: MEDIA_TYPES.image,
    name: "Image 1",
    url: "https://picsum.photos/id/1001/200/300",
    thumbnail: "https://picsum.photos/id/1001/200/300",
    duration: 5,
    createdAt: Date.now(),
  },
  {
    id: "1",
    type: MEDIA_TYPES.image,
    name: "Background.jpg",
    url: previewImage,
    thumbnail: previewImage,
    createdAt: Date.now(),
  },
  {
    id: "2",
    type: MEDIA_TYPES.video,
    name: "Intro.mp4",
    url: "https://example.com/video.mp4",
    thumbnail: previewImage,
    duration: 15,
    createdAt: Date.now(),
  },
  {
    id: "3",
    type: MEDIA_TYPES.audio,
    name: "Background Music.mp3",
    url: "https://example.com/audio.mp3",
    thumbnail: previewImage,
    duration: 180,
    createdAt: Date.now(),
  },
];
