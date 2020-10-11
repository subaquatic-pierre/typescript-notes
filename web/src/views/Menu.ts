import { View } from "./View";

export class MenuView extends View {
  template(): string {
    return `
        <button class='home'>Home</button>
        <button class='list-users'>List Users</button>
        `;
  }
}
