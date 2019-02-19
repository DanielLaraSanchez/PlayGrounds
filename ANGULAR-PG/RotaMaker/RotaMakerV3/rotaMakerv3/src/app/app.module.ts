import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { ShiftsComponent } from './views/shifts/shifts.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './views/calendar/calendar.component';
import { WeekComponent } from './views/calendar/week/week.component';
import { DayComponent } from './views/calendar/week/day/day.component';
import { EmployeeComponent } from './views/employees/employee/employee.component';
import { ShiftComponent } from './views/shifts/shift/shift.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { DayshiftsComponent } from './common/ng-components/dayshifts/dayshifts.component';
import { DaysetupComponent } from './views/calendar/week/daysetup/daysetup.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    ShiftsComponent,
    HomeComponent,
    CalendarComponent,

    WeekComponent,
    DayComponent,
    EmployeeComponent,
    ShiftComponent,
    NotificationsComponent,
    DayshiftsComponent,
    DaysetupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WeekComponent, DayComponent, DaysetupComponent, ShiftComponent]

})
export class AppModule { }
