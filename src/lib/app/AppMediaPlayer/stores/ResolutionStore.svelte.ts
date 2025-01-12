export class ResolutionStore {
  #width = 1920;
  #height = 1080;

  constructor(width: number = 1920, height: number = 1080) {
    this.#width = width;
    this.#height = height;
  }

  get label() {
    return `${this.#width}x${this.#height}`;
  }

  get aspectRatio() {
    return `${this.#width}/${this.#height}`;
  }

  get ratio() {
    return this.#width / this.#height;
  }

  get width() {
    return this.#width;
  }

  set width(value: number) {
    this.#width = value;
  }

  get height() {
    return this.#height;
  }

  set height(value: number) {
    this.#height = value;
  }
}