import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role';


import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


import * as $ from 'jquery'


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
  
  roles;
  name = 'World';
  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  // horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
  horas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]

  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


  constructor(private _employeeService: EmployeesService, private toastr: ToastrService, public _rolesService: RoleService) { }


  ngOnInit() {
    this.getEmployees();
    this.getRoles();
    this.getRolesForDropDown();
    // this.process();

    
  }

  getRolesForDropDown(){
   let arrRoles = [];
     this._rolesService.getRoles().subscribe((res) => {
      arrRoles = res as Role[];
      this.myOptions = this.processRolesForDropDown(arrRoles)
    })
  }

  processRolesForDropDown(roles){
    let array = [];
    roles.forEach((element) => {
      array.push({name: element.role, id: element.role })
    })
    return array;
  }



 

  onChange() {
    console.log(this.optionsModel);
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
    newEmployee.aviability['Monday'][0] = form.value.monday;
    newEmployee.aviability['Monday'][1] = form.value.mondayFinish;
    newEmployee.aviability['Tuesday'][0] = form.value.tuesday;
    newEmployee.aviability['Tuesday'][1] = form.value.tuesdayFinish;
    newEmployee.aviability['Wednesday'][0] = form.value.wednesday;
    newEmployee.aviability['Wednesday'][1] = form.value.wednesdayFinish;
    newEmployee.aviability['Thursday'][0] = form.value.thursday;
    newEmployee.aviability['Thursday'][1] = form.value.thursdayFinish;
    newEmployee.aviability['Friday'][0] = form.value.friday;
    newEmployee.aviability['Friday'][1] = form.value.fridayFinish;
    newEmployee.aviability['Saturday'][0] = form.value.saturday;
    newEmployee.aviability['Saturday'][1] = form.value.saturdayFinish;
    newEmployee.aviability['Sunday'][0] = form.value.sunday;
    newEmployee.aviability['Sunday'][1] = form.value.sundayFinish;
    console.log(newEmployee)
    if(!form.value._id){

      this._employeeService.createEmployee(newEmployee).subscribe((res) => {
        this.resetForm(form);
        this.toastr.success('', 'Saved Successfully!', {timeOut: 1000} );
        this.getEmployees();
      })
    }else{
      this._employeeService.updateEmployee(newEmployee, form.value._id).subscribe(res => {
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


   process(){
     let newArray = [];
     let emp = this.getEmployeesDb();
     emp.forEach((element) => {
       newArray.push({name: element.name, position: ["Back Grill", "Cashier"], hpw: element.hpw, aviability: element.aviability, hworked: element.hworked, fullyBooked: element.fullyBooked, })
     })

      newArray.forEach((element) => {
        this._employeeService.createEmployee(element).subscribe((res) => {
         console.log(res)
        })
      })
     console.log(newArray, "newArray")
   }

   getEmployeesDb(){
     return [
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7180e92c66386a59ee4a5c",
      "name": "Linda",
      "position": "Back Grill",
      "hpw": 40,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "0",
      "24"
      ],
      "Tuesday": [
      "0",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      "0",
      "24"
      ],
      "Sunday": [
      "0",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7181132c66386a59ee4a5d",
      "name": "Rochin",
      "position": "Back Grill",
      "hpw": 40,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "0",
      "24"
      ],
      "Tuesday": [
      "0",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      "0",
      "24"
      ],
      "Sunday": [
      "0",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7181692c66386a59ee4a5e",
      "name": "Hanna",
      "position": "Back Grill",
      "hpw": 16,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      "0",
      "24"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      "0",
      "24"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7181a92c66386a59ee4a5f",
      "name": "Oscar",
      "position": "Back Grill",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      "0",
      "24"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      "0",
      "24"
      ],
      "Sunday": [
      "0",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c71891c2c66386a59ee4a61",
      "name": "Minto",
      "position": "Back Grill",
      "hpw": 40,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "0",
      "24"
      ],
      "Tuesday": [
      "0",
      "22"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      "0",
      "16"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7189732c66386a59ee4a62",
      "name": "Murray",
      "position": "Back Grill",
      "hpw": 28,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "15",
      "24"
      ],
      "Wednesday": [
      "0",
      "23"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "0",
      "24"
      ],
      "Sunday": [
      "0",
      "22"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7189b42c66386a59ee4a63",
      "name": "Elly D",
      "position": "Back Grill",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "11",
      "21"
      ],
      "Tuesday": [
      "11",
      "21"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "11",
      "21"
      ],
      "Saturday": [
      "11",
      "21"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718a072c66386a59ee4a64",
      "name": "Kezia",
      "position": "Back Grill",
      "hpw": 15,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "17",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      "18",
      "23"
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      null,
      null
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718a7b2c66386a59ee4a65",
      "name": "Ross",
      "position": "Back Grill",
      "hpw": 30,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "0",
      "24"
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      "0",
      "24"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "0",
      "24"
      ],
      "Saturday": [
      null,
      null
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718aba2c66386a59ee4a66",
      "name": "Kate",
      "position": "Cashier",
      "hpw": 15,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      null,
      null
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718aed2c66386a59ee4a67",
      "name": "Martin",
      "position": "Back Grill",
      "hpw": 4,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "12",
      "16"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718b332c66386a59ee4a68",
      "name": "Chris",
      "position": "Cashier",
      "hpw": 40,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "12",
      "24"
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718b762c66386a59ee4a69",
      "name": "Fiona",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "16",
      "24"
      ],
      "Wednesday": [
      "16",
      "24"
      ],
      "Thursday": [
      "16",
      "24"
      ],
      "Friday": [
      "16",
      "24"
      ],
      "Saturday": [
      "16",
      "22"
      ],
      "Sunday": [
      "16",
      "22"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718c932c66386a59ee4a6a",
      "name": "Kara",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718d522c66386a59ee4a6c",
      "name": "Ian",
      "position": "Back Grill",
      "hpw": 25,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      "12",
      "22"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "16",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "22"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718dc92c66386a59ee4a6d",
      "name": "Josh",
      "position": "Back Grill",
      "hpw": 15,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "12",
      "24"
      ],
      "Tuesday": [
      "15",
      "24"
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      "18",
      "24"
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718e032c66386a59ee4a6e",
      "name": "Kyle",
      "position": "Cashier",
      "hpw": 30,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "12",
      "24"
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718e322c66386a59ee4a6f",
      "name": "Connor",
      "position": "Cashier",
      "hpw": 24,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718e752c66386a59ee4a70",
      "name": "Louis",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "18",
      "24"
      ],
      "Saturday": [
      "18",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718e952c66386a59ee4a71",
      "name": "Madelain",
      "position": "Cashier",
      "hpw": 12,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "13",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718ed32c66386a59ee4a72",
      "name": "Jack",
      "position": "Cashier",
      "hpw": 30,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "12",
      "24"
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718f202c66386a59ee4a73",
      "name": "Melissa",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "17",
      "24"
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      "16",
      "24"
      ],
      "Thursday": [
      "18",
      "24"
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "15",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718f4b2c66386a59ee4a74",
      "name": "Lucy A",
      "position": "Cashier",
      "hpw": 30,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "12",
      "24"
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "12",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718fb12c66386a59ee4a75",
      "name": "Rachel",
      "position": "Cashier",
      "hpw": 16,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      null,
      null
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      "13",
      "21"
      ],
      "Saturday": [
      "14",
      "23"
      ],
      "Sunday": [
      "14",
      "23"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718fd52c66386a59ee4a76",
      "name": "Patryc",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "16",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      "16",
      "24"
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      null,
      null
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c718ff72c66386a59ee4a77",
      "name": "Federica",
      "position": "Cashier",
      "hpw": 25,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      null,
      null
      ],
      "Tuesday": [
      "12",
      "23"
      ],
      "Wednesday": [
      "12",
      "23"
      ],
      "Thursday": [
      null,
      null
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "12",
      "23"
      ],
      "Sunday": [
      null,
      null
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7190302c66386a59ee4a78",
      "name": "Harry",
      "position": "Cashier",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "17",
      "24"
      ],
      "Tuesday": [
      "16",
      "24"
      ],
      "Wednesday": [
      "12",
      "24"
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      "16",
      "24"
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      },
      {
      "shiftsWorked": [],
      "colleagues": [],
      "_id": "5c7190782c66386a59ee4a79",
      "name": "Jody",
      "position": "Back Grill",
      "hpw": 20,
      "salary": 0,
      "fullyBooked": false,
      "hworked": 0,
      "aviability": {
      "Monday": [
      "15",
      "12"
      ],
      "Tuesday": [
      "12",
      "24"
      ],
      "Wednesday": [
      null,
      null
      ],
      "Thursday": [
      "12",
      "24"
      ],
      "Friday": [
      null,
      null
      ],
      "Saturday": [
      "12",
      "24"
      ],
      "Sunday": [
      "12",
      "24"
      ]
      },
      "__v": 0
      }
      ]
  
  
    }}
