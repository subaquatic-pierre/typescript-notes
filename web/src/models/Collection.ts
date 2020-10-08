import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(private url: string, private serialize: (json: K) => T) {}

  fetch = (): void => {
    axios.get(this.url).then((res: AxiosResponse) => {
      res.data.forEach((val: K) => {
        const user = this.serialize(val);
        this.models.push(user);
      });
      this.events.trigger("change");
    });
  };
}
