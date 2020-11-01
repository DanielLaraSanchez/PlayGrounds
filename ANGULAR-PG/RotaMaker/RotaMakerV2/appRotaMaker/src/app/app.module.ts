import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './public/table/table.component';

import { WorkersService } from './public/services/workers.service';
import { ShiftsService } from './public/services/shifts.service';
import { MonthComponent } from './VIEWS/month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ WorkersService, ShiftsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
