import axios, { AxiosResponse } from "axios";
import { DB_URL } from "../constants";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

type Callback = () => void;

export class User {
  events: {
    [key: string]: Callback[];
  } = {};
  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): number | string | undefined {
    return this.data[propName];
  }

  set(updateData: UserProps): void {
    const newData = { ...this.data, ...updateData };
    this.data = newData;
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    const userID = this.get("id");
    axios.get(`${DB_URL}/users/${userID}`).then((res: AxiosResponse) => {
      this.set(res.data);
    });
  }

  save(): void {
    const userID = this.get("id");
    if (!userID) {
      axios.post(`${DB_URL}/users`, this.data).then((res: AxiosResponse) => {
        console.log("New user created");
        console.log(res.data);
      });
    } else {
      axios
        .put(`${DB_URL}/users/${userID}`, this.data)
        .then((res: AxiosResponse) => {
          console.log("User updated");
          console.log(res.data);
        });
    }
  }

  delete(): void {
    const userID = this.get("id");
    axios.delete(`${DB_URL}/users/${userID}`).then((res: AxiosResponse) => {
      console.log("User has been deleted !");
    });
  }
}
