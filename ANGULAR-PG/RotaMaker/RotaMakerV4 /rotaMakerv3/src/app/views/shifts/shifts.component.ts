import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';
import { NgForm } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';
import * as ArrayMove from 'array-move';
import { Subscriber, Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
  providers: [ShiftsService]
})
export class ShiftsComponent implements OnInit {

  unsavedShifts;
  unsavedEmployees = [];
  unsavedEmployees2 = [];

  time;


  constructor(public employeeService: EmployeesService) {

    this.unsavedShifts = this.getShifts();

  }

  async ngOnInit() {
    this.unsavedEmployees = this.shuffle(await this.getEmployees());
    console.log(this.unsavedShifts)
    console.log(this.unsavedEmployees)
    if (this.unsavedShifts != null) {
      if (this.unsavedShifts.length != 0) {
        this.putEmployeesInShifts(this.unsavedShifts);

      }

    }




    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    this.time.subscribe((res) => {
      console.log(res)
    })
    
  }



  // ACTION THE MAGIC********************************************++



  putEmployeesInShifts(shifts) {
    shifts.forEach((shift) => {
      this.putEmployeesInShift(shift)
    })
    shifts.forEach((shift) => {
      this.putEmployeesInShiftLessRefined(shift)
    });
    this.unsavedEmployees.forEach((employee) => {
      this.getColleagues(employee, shifts)
    })
    if (this.checkIfThereIsAnyOneThatCanWork(shifts) === true) {
      this.putEmployeesInShifts(shifts);
    }

  }


  putEmployeesInShift(shift: Shift) {
    let employees = this.shuffle(this.getAllWithLessHoursWorked(this.unsavedEmployees))
    employees.forEach((empl) => {
      const isWorkingToday = this.avoidEmployeToWorkSameDay(empl, shift)
      const newHpw = empl.hpw - empl.hworked;
      if ((isWorkingToday === false) && (empl.fullyBooked === false) && (empl.hpw >= shift.hours) && (shift.workersRequired > shift.arrayOfWorkers.length) && (newHpw >= shift.hours) && (!shift.arrayOfWorkers.includes(empl))) {
        this.actionOnEmployee(empl, shift);
      }
    });
  }

  putEmployeesInShiftLessRefined(shift: Shift) {
    let employees = this.shuffle(this.unsavedEmployees)
    employees.forEach((empl) => {
      const isWorkingToday = this.avoidEmployeToWorkSameDay(empl, shift)
      if (empl.hpw <= empl.hworked) {
        empl.fullyBooked = true;
      }
      this.putTrulyFullyBookedEmployees(empl);
      const newHpw = empl.hpw - empl.hworked;
      if ((isWorkingToday === false) && (empl.fullyBooked === false) && (empl.hpw >= shift.hours) && (shift.workersRequired > shift.arrayOfWorkers.length) && (newHpw >= shift.hours) && (!shift.arrayOfWorkers.includes(empl))) {
        this.actionOnEmployee(empl, shift);
      }

    });
  }
  actionOnEmployee(employee, shift: Shift) {
    employee.hworked += shift.hours
    shift.arrayOfWorkers.push(employee)
    employee.shiftsWorked.push({ shifthours: shift.hours, shiftId: this.unsavedShifts.indexOf(shift), shiftDay: shift.day })
  }




  // TOOLS ****************************************************************************************


  avoidEmployeToWorkSameDay(emp, shift: Shift) {
    let bool = false
    emp.shiftsWorked.forEach((shiftEmployee) => {
      if (shift.day === shiftEmployee.shiftDay) {
        bool = true
      }
    })
    return bool
  }



  putShiftDetailsInEmplArrayOfShifts(emp: Employee, shift: Shift) {
    const colleagues = [];
    shift.arrayOfWorkers.forEach((employee) => {
      if (shift.arrayOfWorkers.includes(emp) && emp.name != employee.name) {
        colleagues.push(employee.name)
        emp.colleagues.push(employee.name)
      }
    })
    return colleagues;
  }


  getColleagues(empl, shifts) {
    shifts.forEach((shift) => {
      this.putShiftDetailsInEmplArrayOfShifts(empl, shift)
    })
  }

  putTrulyFullyBookedEmployees(emp) {
    const lowestShift = this.getLowestShiftHours(this.unsavedShifts);
    const empHpwLeft = emp.hpw - emp.hworked;
    if (lowestShift != false && empHpwLeft < lowestShift.hours) {
      emp.fullyBooked = true;
    }
  }


  getLowestShiftHours(shifts: Shift[]) {
    let counter = 0;
    let element1 = shifts[0]
    shifts.forEach(element => {
      if (element.arrayOfWorkers.length >= element.workersRequired) {
        element.fullyBooked = true
      }
      if (element.fullyBooked === true) {
        counter++
      }
      else if (element1.hours > element.hours) {
        element1.hours = element.hours;
      }
    })
    if (counter >= shifts.length) {
      console.log("todas las shifts estan cubiertas")
      return false
    }
    else {

      return element1
    }
  }

  checkIfThereIsAnyOneThatCanWork(shifts): Boolean {
    let boolean = null;
    let counter = 0;
    this.unsavedEmployees.forEach((emp) => {
      let empHpw = emp.hpw - emp.hworked;
      shifts.forEach((shift: Shift) => {
        emp.shiftsWorked.forEach((empShiftWorked) => {
          if (empShiftWorked.shiftDay !== shift.day && emp.fullyBooked === false && empHpw >= shift.hours && shift.fullyBooked === false) {
            console.log("todavia hay un empleado que puede trabajar")
            counter++
            boolean = true
          } else {
            console.log("no hay suficientes empleados")
            boolean = false
          }
        })
      })
    })
    return boolean
  }


  getAllWithLessHoursWorked(arrayOfEmployees) {//////shuffle?
    let personThatWorkedTheLeast = this.getEmployeeThatWorkedTheLeast();
    let peopleThatWorkedTheLeast = arrayOfEmployees.filter(element => {
      return element.hworked <= personThatWorkedTheLeast.hworked;
    });
    return peopleThatWorkedTheLeast
  }
  getEmployeeThatWorkedTheLeast() {
    const closest = this.unsavedEmployees.reduce((acc, emp) => {
      return acc.hworked < emp.hworked ? acc : emp
    });
    return closest
  }

  shuffle(a) {
    if (a != null) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
    }

    return a;
  }












  // DATA SETUP*************************************************


  getEmployees(): any {
    /* Regresamos una promesa que se resuelve hasta que tenemos los datos listos */
    return new Promise((resolve, reject) => {
      this.employeeService.getEmployees().subscribe((responseData) => {
        resolve(responseData);
      });
    });
  }

  getShifts() {
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



    // this.employeeService.employees2.getValue();   ************BehaviorSubject() THIS GOES IN THE CONSCTRUCTOR OF THIS COMPONENT*************
    // this.employeeService.employees2.subscribe((res) => {
    //   if(res != null){
    //     this.unsavedEmployees = res

    //   }

    // })






  // getEmployeeWithHiguestHoursLeft(): Employee{
  //   let firstEmployee = this.unsavedEmployees[0];
  //   let firstEmployeeHoursLeft = firstEmployee.hpw - firstEmployee.hworked
  //  this.unsavedEmployees.forEach((employee) => {
  //      const employeeHoursleft = employee.hpw - employee.hworked;
  //     if(employeeHoursleft > firstEmployeeHoursLeft){
  //       firstEmployee = employee;
  //       return firstEmployee;
  //     }   
  //   })
  //   return firstEmployee

  // }


  // getHighestHpw(shiftsArray) {
  //   let lowestShift = this.getLowestShiftHours(shiftsArray)
  //   let result = this.getEmployeeWithHiguestHoursLeft()
  //   if(lowestShift === false){
  //     console.log("todas las shifts estan cubiertas")
  //     return false
  //   }
  //   if (lowestShift.hours <= (result.hpw - result.hworked)) {
  //     console.log("todavia hay gente que puede cubrir shifts")
  //     return true
  //   } else if (lowestShift.hours > (result.hpw - result.hworked)) {
  //     console.log("no hay nadie con tantas horas")
  //     return false
  //   }
  // }

}
