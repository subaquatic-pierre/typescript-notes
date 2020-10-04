import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
    return true;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const tmp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = tmp;
    this.data = characters.join("");
  }
}
