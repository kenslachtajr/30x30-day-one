import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '@cars-workspace/core-data';

@Component({
  selector: 'cars-workspace-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars$;
  selectedCar: Car;

  constructor(private carsService: CarsService) { }

  resetCar() {
    const emptyCar: Car = {
      id: null,
      make: '',
      model: '',
      maxSpeed: null
    }
    this.selectCar(emptyCar);
  }

  ngOnInit() {
    this.getCars();
    this.resetCar();
  }

  selectCar(car) {
    this.selectedCar = car;
  }

  getCars() {
    this.cars$ = this.carsService.all();
  }

  saveCar(car) {
    if (!car.id) {
      this.createCar(car);
    } else {
      this.updateCar(car);
    }
  }

  updateCar(car) {
    this.carsService.update(car)
    .subscribe(result => {
      this.getCars();
      this.resetCar();
    });
  }

  createCar(car) {
    this.carsService.create(car)
    .subscribe(result => {
      this.getCars();
      this.resetCar();
    })
  }

  deleteCar(car) {
    this.carsService.delete(car.id)
    .subscribe(result => this.getCars());
  }

  cancel() {
    this.resetCar();
  }

}
