export class ToggleStore {
  #current = $state(false);

  constructor(initialValue: boolean = false) {
    this.current = initialValue;
  }

  onClose = () => {
    this.current = false;
  }

  onOpen = () => {
    this.current = true;
  }

  toggle = () => {
    this.current = !this.current;
  }

  get current() {
    return this.#current;
  }

  set current(value: boolean) {
    this.#current = value;
  }
}