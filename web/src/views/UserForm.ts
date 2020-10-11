import { User, UserProps } from "../models/User";
import { ModelView } from "./ModelView";

export class UserForm extends ModelView<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save": this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    const age = this.model.generateRandomAge();
    this.model.set({ age });
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const inputBox: HTMLInputElement = this.parent.querySelector(
      ".input-box"
    ) as HTMLInputElement;
    const name = inputBox.value;
    if (name) {
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <input class='input-box' type='text' placeholder='Please enter your name' />
        <button class='set-name'>Set new Name</button>
        <button class='set-age'>Generate Random Age</button>
        <button class='save'>Save User</button>
      </div>
        `;
  }
}
