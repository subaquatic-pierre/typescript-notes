import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(
    public parentElement: Element,
    public collection: Collection<T, K>
  ) {}

  abstract renderItem(itemParent: Element, model: T): void;

  render() {
    this.parentElement.innerHTML = "";
    const template = document.createElement("template");

    for (let item of this.collection.models) {
      const itemParent = document.createElement("div");

      this.renderItem(itemParent, item);
      template.content.appendChild(itemParent);
    }

    this.parentElement.appendChild(template.content);
  }
}
