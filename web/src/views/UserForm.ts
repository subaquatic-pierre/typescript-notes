import { User } from "../models/User";

export class UserForm {
  constructor(private parent: Element, private model: User) {
    this.registerChangeListener();
  }

  registerChangeListener = (): void => {
    this.model.on("change", this.render);
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.setAgeButtonClick,
      "click:.set-name": this.setNameButtonClick,
    };
  }

  setAgeButtonClick = (): void => {
    const age = this.model.generateRandomAge();
    this.model.set({ age });
  };

  setNameButtonClick = (): void => {
    const inputBox: HTMLInputElement = this.parent.querySelector(".input-box");
    const name = inputBox.value;
    if (name) {
      this.model.set({ name });
    }
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let keyString of Object.keys(eventsMap)) {
      const [event, selector] = keyString.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(event, eventsMap[keyString]);
      });
    }
  };

  template(): string {
    return `
        <h1>
        User from
        </h1>
        <h2>User Name: ${this.model.get("name")}</h2>
        <h2>Age: ${this.model.get("age")}</h2>
        <input class='input-box' type='text' placeholder='Please enter your name' />
        <button class='set-name'>Set new Name</button>
        <button class='set-age'>Generate Random Age</button>
        `;
  }

  render = (): void => {
    this.parent.innerHTML = "";
    const html = this.template();
    const template = document.createElement("template");
    template.innerHTML = html;

    this.bindEvents(template.content);

    this.parent.appendChild(template.content);
  };
}
