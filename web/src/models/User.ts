import { AxiosResponse } from "axios";
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

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set = (updateData: UserProps): void => {
    this.attrs.set(updateData);
    this.trigger("change");
  };

  fetch = (): void => {
    const id = this.attrs.get("id") || undefined;
    if (!id) {
      throw new Error("Cannot fetch User without an ID");
    }

    this.sync
      .fetch(id)
      .then((res: AxiosResponse): void => {
        console.log(res.data);
        this.set(res.data);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  save = (): void => {
    const data = this.attrs.getAll();
    this.sync
      .save(data)
      .then((res: AxiosResponse) => {
        console.log(res.data);
        this.set(res.data);
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  };

  delete = () => {
    const id = this.get("id");
    if (!id) {
      console.log("The user does not exists in the database");
    } else {
      this.sync
        .delete(id)
        .then((res: AxiosResponse) => {
          console.log("User successfully deleted from the database");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
}
