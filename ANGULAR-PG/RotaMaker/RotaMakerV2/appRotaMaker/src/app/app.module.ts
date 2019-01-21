import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TableComponent } from './public/table/table.component';

import { WorkersService } from './public/services/workers.service';
import { ShiftsService } from './public/services/shifts.service';
import { MonthComponent } from './VIEWS/month/month.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardModule } from './AuthModule/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MonthComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [ WorkersService, ShiftsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
