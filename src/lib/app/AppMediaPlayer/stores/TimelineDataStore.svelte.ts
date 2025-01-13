import type { ResolutionDataItem } from "../types/resolutions";
import type { TrackStore } from "./TrackStore";

export class TimelineDataStore {
  #tracks: TrackStore[] = $state([]);
  #data: ResolutionDataItem = $state({
    locales: [],
    stores: [],
    markets: [],
  });

  constructor() { }

  get tracks() {
    return this.#tracks;
  }

  get data() {
    return this.#data;
  }

  set data(value: ResolutionDataItem) {
    this.#data = value;
  }
}