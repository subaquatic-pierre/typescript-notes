import { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from "./Eventing";

export interface HasId {
  id?: number;
}

interface Events {
  events: { [key: string]: Callback[] };
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface Sync<T> {
  url: string;
  fetch(id: number): AxiosPromise;
  save(updateData: T): AxiosPromise;
  delete(id: number): AxiosPromise;
}

interface ModelAttributes<T> {
  data: T;
  get<K extends keyof T>(key: K): T[K];
  set(updateData: T): void;
  getAll(): T;
}

export class Model<T extends HasId> {
  constructor(
    private events: Events,
    private sync: Sync<T>,
    private attrs: ModelAttributes<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set = (updateData: T): void => {
    this.attrs.set(updateData);
    this.trigger("change");
  };

  fetch = (): void => {
    const id = this.attrs.get("id");
    if (!id) {
      throw new Error("Cannot fetch User without an ID");
    }

    this.sync
      .fetch(id as number)
      .then((res: AxiosResponse): void => {
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
        this.set(res.data);
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
        .delete(id as number)
        .then((res: AxiosResponse) => {
          console.log("User successfully deleted from the database");
          this.events.trigger("delete");
        })
        .catch((err) => {
          this.events.trigger("error");
          console.log(err.message);
        });
    }
  };
}
