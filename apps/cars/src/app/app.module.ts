import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@cars-workspace/core-data';
import { MaterialModule } from '@cars-workspace/material';
import { UiToolbarModule } from '@cars-workspace/ui-toolbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, CoreDataModule, MaterialModule, UiToolbarModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
