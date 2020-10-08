import { User, UserProps } from "../models/User";
import { ModelView } from "./ModelView";

export class UserShow extends ModelView<User, UserProps> {
  template(): string {
    return `
    <div>
        <h1>User Name: ${this.model.get("name")}
        <h1>Age: ${this.model.get("age")}
    </div>
    `;
  }
}
