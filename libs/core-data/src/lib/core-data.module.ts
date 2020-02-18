import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars/cars.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CarsService]
})
export class CoreDataModule {}
