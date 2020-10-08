import { DB_URL } from "../constants";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(`${DB_URL}/users`);
  attrs: Attributes<UserProps>;
  constructor(public data: UserProps) {
    this.attrs = new Attributes<UserProps>(data);
  }
}
