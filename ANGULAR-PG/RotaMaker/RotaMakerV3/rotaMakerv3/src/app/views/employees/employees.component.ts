import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
  

  constructor(private _employeeService: EmployeesService, private toastr: ToastrService) { }


  ngOnInit() {
    this.getEmployees();
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this._employeeService.selectedEmployee = new Employee();
    }
  }

  saveForm(form?: NgForm){
    const newEmployee = new Employee();
    newEmployee.name = form.value.name;
    newEmployee.position = form.value.position;
    newEmployee.hpw = form.value.hpw;
    newEmployee.hworked = 0;
    if(!form.value._id){

      this._employeeService.createEmployee(newEmployee).subscribe((res) => {
        this.resetForm(form);
        this.toastr.success('', 'Saved Successfully!', {timeOut: 1000} );
        this.getEmployees();
      })
    }else{
      this._employeeService.updateEmployee(form.value).subscribe(res => {
        console.log(res)
        this.resetForm(form);
        this.getEmployees();
        this.toastr.success('', 'Successfully Updated!', {timeOut: 1000});
      });
    }
  }

  getEmployees(){
    this._employeeService.getEmployees().subscribe((res) => {
      this._employeeService.employees = res as Employee[];
      console.log(res)
    })
  }

  updateEmployee(employee: Employee){
   this._employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: String) {
    this._employeeService.deleteEmployee(_id).subscribe(res => {
      this.getEmployees();
      
      this.toastr.success('', 'Successfully Deleted!', {timeOut: 750});

    })
  }

}
