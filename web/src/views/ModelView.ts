import { Model } from "../models/Model";
import { View } from "./View";

interface RegionsMap {
  [key: string]: Element;
}

export abstract class ModelView<T extends Model<K>, K> extends View {
  regions: RegionsMap = {};

  constructor(public parent: Element, public model: T) {
    super(parent);
    this.bindModelOnChangeListener();
  }

  bindModelOnChangeListener = (): void => {
    this.model.on("change", this.render);
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let keyString in eventsMap) {
      const [event, selector] = keyString.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(event, eventsMap[keyString]);
      });
    }
  };

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  };

  render = (): void => {
    this.parent.innerHTML = "";
    const html = this.template();
    const template = document.createElement("template");
    template.innerHTML = html;

    this.bindEvents(template.content);
    this.mapRegions(template.content);

    this.onRender();

    this.parent.appendChild(template.content);
  };
}
