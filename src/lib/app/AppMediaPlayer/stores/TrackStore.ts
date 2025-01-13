import type { MediaType } from "../types/media";
import type { Track, TrackContent } from "../types/timeline/track";

export class TrackStore implements Track {
  #id: string;
  #type: MediaType;
  #name: string = $state("");
  #contents: TrackContent[] = $state([]);

  constructor(id: string, name: string, type: MediaType) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  get name() {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get contents() {
    return this.#contents;
  }
}