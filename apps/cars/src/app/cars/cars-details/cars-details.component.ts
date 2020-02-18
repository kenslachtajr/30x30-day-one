import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '@cars-workspace/core-data';

@Component({
  selector: 'cars-workspace-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent {

  currentCar: Car;
  originalMake;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set car(value) {
    if (value) this.originalMake = value.make;
    this.currentCar = Object.assign({}, value)
  }
}
