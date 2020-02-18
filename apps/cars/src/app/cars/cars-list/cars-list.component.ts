import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../../../../libs/core-data/src/lib/cars/car.model';

@Component({
  selector: 'cars-workspace-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {
  @Input() cars: Car[] 
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
