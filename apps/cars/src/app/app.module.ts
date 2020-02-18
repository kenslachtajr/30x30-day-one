import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreDataModule } from '@cars-workspace/core-data';
import { MaterialModule } from '@cars-workspace/material';
import { UiToolbarModule } from '@cars-workspace/ui-toolbar';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListComponent,
    CarsDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    FormsModule,
    MaterialModule,
    UiToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
