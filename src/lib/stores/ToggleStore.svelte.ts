export class ToggleStore {
  #open = $state(false);

  constructor(initialValue: boolean = false) {
    this.open = initialValue;
  }

  onClose = () => {
    this.open = false;
  }

  onOpen = () => {
    this.open = true;
  }

  toggle = () => {
    this.open = !this.open;
  }

  get open() {
    return this.#open;
  }

  set open(value: boolean) {
    this.#open = value;
  }
}