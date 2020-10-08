import { Model } from "../models/Model";

interface RegionsMap {
  [key: string]: Element;
}

export abstract class View {
  regions: RegionsMap = {};

  constructor(public parent: Element) {}

  abstract template(): string;
  onRender(): void {}

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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
