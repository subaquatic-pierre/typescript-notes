import { DB_URL } from "../constants";
import { ModelAttributes } from "./ModelAttributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Eventing(),
      new ApiSync<UserProps>(`${DB_URL}/users`),
      new ModelAttributes<UserProps>(attrs)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(`${DB_URL}/users`, (json) => {
      return this.buildUser(json);
    });
  }
}
