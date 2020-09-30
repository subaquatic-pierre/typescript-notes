import faker from "faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  makerContent(): string {
    return `
      <h3>${this.name}</h3>
      <p>${faker.lorem.lines(5)}</p>
      `;
  }
}
