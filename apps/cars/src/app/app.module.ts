import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@cars-workspace/core-data';
import { MaterialModule } from '@cars-workspace/material';
import { UiToolbarModule } from '@cars-workspace/ui-toolbar';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarsListComponent, CarsDetailsComponent],
  imports: [ BrowserModule, CoreDataModule, MaterialModule, UiToolbarModule, BrowserAnimationsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
