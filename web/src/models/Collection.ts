import axios, { AxiosResponse } from "axios";
import { Callback, Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(private url: string, private serialize: (json: K) => T) {}

  on = (eventName: string, callback: Callback): void => {
    this.events.on(eventName, callback);
  };

  fetch = (): void => {
    axios
      .get(this.url)
      .then((res: AxiosResponse) => {
        res.data.forEach((val: K) => {
          const user = this.serialize(val);
          this.models.push(user);
        });
      })
      .then(() => {
        this.events.trigger("change");
      });
  };
}
