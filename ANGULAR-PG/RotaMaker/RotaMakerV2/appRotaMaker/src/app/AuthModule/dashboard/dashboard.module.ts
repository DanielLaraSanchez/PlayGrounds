import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { EmployeesComponent } from './views/employees/employees.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [HomeComponent, SidebarComponent, EmployeesComponent],
  providers: []
})
export class DashboardModule { }
