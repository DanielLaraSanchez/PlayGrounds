import { Component, OnInit } from '@angular/core';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';
import { NgForm } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
  providers: [ShiftsService]
})
export class ShiftsComponent implements OnInit {

  unsavedShifts;
  unsavedEmployees;


  constructor(public employeeService: EmployeesService) {
    this.unsavedEmployees = JSON.parse(sessionStorage.getItem('employees'))
    this.unsavedShifts = this.getShifts2();
    
   }

  ngOnInit() {
    this.getEmployees();
    this.getShifts2();
    console.log(this.unsavedEmployees)
  }




putWorkersInShifts(employees, shifts){



}


// filtrarEmpleadosQueMenosHanTrabajado(employees){
//  this.ponerShiftEnEmplTEMPORAL2(employees)

//   let counter = this.cuantasHorasHaTrabajado(employees[0]);
//   console.log(counter, 'antes')
//  employees.forEach((element) => {
//  this.ponerShiftEnEmplTEMPORAL(element)
//   let hoursWorked = this.cuantasHorasHaTrabajado(element)
//   if(hoursWorked >= counter){
//     counter = hoursWorked;
  
//   }
//   console.log(counter, 'counter',  hoursWorked ,'hoursworked')


//  })
//  console.log(employees)


// }

ponerShiftEnEmplTEMPORAL(employee){
  const shift1 = new Shift();
  shift1.hours = 5;
  const shift2 = new Shift();
  shift2.hours = 9
  employee.shiftsWorked.push(shift1)
  employee.shiftsWorked.push(shift2)
}

ponerShiftEnEmplTEMPORAL2(employees){
  const shift1 = new Shift();
  shift1.hours = 2;
  employees[0].shiftsWorked.push(shift1)
}

quienHaTrabajadoMenos(employees){
  employees.forEach((employee) => {
    let horas = this.cuantasHorasHaTrabajado(employee);
    console.log(horas)
  })

}

cuantasHorasHaTrabajado(employee) {
let counter = employee.shiftsWorked.reduce((acc, curr) => {
  return acc.hours + curr.hours
})
return counter
}

filtrarColleaguesConLosQueNuncaHaTrabajado(employees){
  const result = employees.filter((element) => {
    return element
  })
}























































































  
getEmployees(){
  this.employeeService.getEmployees().subscribe((res) => {
    let employees = JSON.stringify(res);
    sessionStorage.setItem('employees', employees)
    
  })


      
  
}

getShifts2(){
return JSON.parse(sessionStorage.getItem('temporaryShifts'))
  
}



  // getShifts(){
  //   this.shiftService.getShifts().subscribe(res => {
  //     this.shiftService.shifts = res as Shift[];
  //     // console.log(this.shiftService.shifts)

  //   })
  // }

  // saveForm(form?: NgForm){
  //   if(!form.value._id){
  //     this.shiftService.createShift(form.value).subscribe((res) => {
  //       this.resetForm(form);
  //     })
  //   }else{
  //     this.shiftService.updateShift(form.value).subscribe(res => {
  //       console.log(res);
  //       this.resetForm(form);
  //       this.getShifts();
  //     })
  //   }
  // }

  // resetForm(form?: NgForm){
  //   if(form){
  //     form.reset();
  //     this.shiftService.selectedShift = new Shift();
  //   }
  // }

  // updateShift(shift: Shift){
  //   this.shiftService.selectedShift = shift
  // }

  // deleteShift(_id: String){
  //   this.shiftService.deleteShift(_id).subscribe(res => {
  //     this.getShifts();
  //   })
  // }

}
