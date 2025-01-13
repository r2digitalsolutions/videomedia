import { ToggleStore } from "$lib/stores/ToggleStore.svelte";
import { ProjectStore } from "./ProjectStore.svelte";
import { ResolutionStore } from "./ResolutionStore.svelte";
import { TimelineStore } from "./TimelineStore.svelte";

export class MediaPlayerStore {
  #isExpanded = new ToggleStore(false);
  #project = new ProjectStore();
  #currentResolution = new ResolutionStore();
  #timeline = new TimelineStore();

  constructor() { }

  timelineToggleCollapsed() {
    this.timeline.toggleCollapsed();
  }

  togglePlayback() {
    this.#timeline.togglePlaying();
  }

  get isExpanded() {
    return this.#isExpanded;
  }

  get currentResolution() {
    return this.#currentResolution;
  }

  get timeline() {
    return this.#timeline;
  }

  get project() {
    return this.#project;
  }
}