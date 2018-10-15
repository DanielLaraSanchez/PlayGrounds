import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { TableComponent } from './public/table/table.component';
import { ShiftComponent } from './public/shift/shift.component';
import { WorkersComponent } from './public/workers/workers.component';

import{WlistService } from './common/services/wlist.service';
import { WeeklyshiftComponent } from './public/weeklyshift/weeklyshift.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ShiftComponent,
    WorkersComponent,
    WeeklyshiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
