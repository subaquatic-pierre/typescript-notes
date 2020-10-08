import axios, { AxiosPromise } from "axios";

interface HasID {
  id?: number;
}

export class Sync<T extends HasID> {
  constructor(public url: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/${id}`);
  }

  save = (updateData: T): AxiosPromise => {
    const { id } = updateData;
    if (!id) {
      return axios.post(`${this.url}`, updateData);
    } else {
      return axios.put(`${this.url}/${id}`, updateData);
    }
  };

  delete = (id: number): AxiosPromise => {
    return axios.delete(`${this.url}/${id}`);
  };
}
