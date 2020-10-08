export class Attributes<T> {
  constructor(public data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (updateData: T): void => {
    const newData = { ...this.data, ...updateData };
    this.data = newData;
  };

  getAll = (): T => {
    return this.data;
  };
}
