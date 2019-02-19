import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
  
  roles;
  name = 'World';

  horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


  constructor(private _employeeService: EmployeesService, private toastr: ToastrService, public _rolesService: RoleService) { }


  ngOnInit() {
    this.getEmployees();
    this.getRoles();
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
    newEmployee.aviability['monday'][0] = form.value.monday;
    newEmployee.aviability['monday'][1] = form.value.mondayFinish;
    newEmployee.aviability['tuesday'][0] = form.value.tuesday;
    newEmployee.aviability['tuesday'][1] = form.value.tuesdayFinish;
    newEmployee.aviability['wednesday'][0] = form.value.wednesday;
    newEmployee.aviability['wednesday'][1] = form.value.wednesdayFinish;
    newEmployee.aviability['thursday'][0] = form.value.thursday;
    newEmployee.aviability['thursday'][1] = form.value.thursdayFinish;
    newEmployee.aviability['friday'][0] = form.value.friday;
    newEmployee.aviability['friday'][1] = form.value.fridayFinish;
    newEmployee.aviability['saturday'][0] = form.value.saturday;
    newEmployee.aviability['saturday'][1] = form.value.saturdayFinish;
    newEmployee.aviability['sunday'][0] = form.value.sunday;
    newEmployee.aviability['sunday'][1] = form.value.sundayFinish;

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



  // ROLES**********************************************************************************


  saveRole(form?: NgForm){
    const newRole = new Role();
    newRole.role = form.value.role;

    console.log(newRole)

    if(!form.value._id){

      this._rolesService.createRole(newRole).subscribe((res) => {
        this.resetRoleForm(form);
        this.toastr.success('', 'Saved Successfully!', {timeOut: 1000} );
        this.getRoles()
      })
    }else{
      this._rolesService.updateRole(form.value).subscribe(res => {
        console.log(res)
        this.resetRoleForm(form);
        this.getRoles();
        this.toastr.success('', 'Successfully Updated!', {timeOut: 1000});
      });
    }
  }


  resetRoleForm(form?: NgForm){
    if(form){
      form.reset();
      this._rolesService.selectedRole = new Role();
    }
  }


  getRoles(){
    this._rolesService.getRoles().subscribe((res) => {
      this.roles = res as Role[];
      console.log(res)
    })
  }

  updateRole(role: Role){
    this._rolesService.selectedRole = role;
   }

   deleteRole(roleId){
     this._rolesService.deleteRole(roleId).subscribe((res) => {
       console.log(res)
       this.getRoles();

     })
   }

}

