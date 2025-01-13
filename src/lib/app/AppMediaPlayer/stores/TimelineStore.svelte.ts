import { ToggleStore } from "$lib/stores/ToggleStore.svelte";
import type { ResolutionMap } from "../types/resolutions";

export class TimelineStore {
  #data: ResolutionMap = $state({});
  #collapsed = new ToggleStore(false);
  #isPlaying = new ToggleStore(false);
  #currentTime = $state(0);
  #duration = $state(0);

  constructor() { }

  toggleCollapsed() {
    this.#collapsed.toggle();
  }

  togglePlaying() {
    this.#isPlaying.toggle();
  }

  get isPlaying() {
    return this.#isPlaying;
  }

  get currentTime() {
    return this.#currentTime;
  }

  set currentTime(value: number) {
    this.#currentTime = value;
  }

  get duration() {
    return this.#duration;
  }

  set duration(value: number) {
    this.#duration = value;
  }

  get collapsed() {
    return this.#collapsed;
  }

  get data() {
    return this.#data;
  }
}