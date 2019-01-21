import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { EmployeesComponent } from '../views/employees/employees.component';



const secondaryRoutes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'dashboard/employees',
    component: EmployeesComponent
  }

]

@NgModule({
  imports: [
  RouterModule.forChild(secondaryRoutes)
],
  exports: [
    RouterModule,
  ]
})


export class RoutingModule { }
