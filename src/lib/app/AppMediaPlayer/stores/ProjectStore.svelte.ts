export class ProjectStore {
  #name: string = $state("Custom Project");
  #description: string = $state("Custom Project Description");
  #duration: number = $state(180);

  constructor() { }

  get name() {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get description() {
    return this.#description;
  }

  set description(value: string) {
    this.#description = value;
  }

  get duration() {
    return this.#duration;
  }

  set duration(value: number) {
    this.#duration = value;
  }
}