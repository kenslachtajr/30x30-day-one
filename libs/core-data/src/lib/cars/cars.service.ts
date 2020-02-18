import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  model = 'cars'
  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  create(car) {
    return this.httpClient.post(this.getUrl(), car);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(car) {
    return this.httpClient.patch(this.getUrlForId(car.id),car)
  }

  delete(carId) {
    return this.httpClient.delete(this.getUrlForId(carId))
  }
}
