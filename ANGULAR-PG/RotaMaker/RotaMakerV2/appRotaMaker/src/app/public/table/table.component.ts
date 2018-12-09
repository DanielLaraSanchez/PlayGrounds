import { Component, OnInit, Testability } from '@angular/core';
import { WorkersService } from '../services/workers.service';
import { ShiftsService } from '../services/shifts.service';
import { Employee } from '../models/employee.model';
import { Shift } from '../models/shift.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees;
  shifts;
  shifts2;
  readyToWorkArray;
  a;


  constructor(public _workersService: WorkersService, public _shiftService: ShiftsService) {
    this.employees = this._workersService.getAllEmployees();

    this.readyToWorkArray = [];

  }






  ngOnInit() {
    this.shifts2 = this._shiftService.getAllShifts2();
    this.shifts = this.shuffle(this._shiftService.getAllShifts());
    this.a = this._shiftService.getAllShifts2();


    console.log(this.employees)
    // this.shuffle(this.employees)

    //  console.log(this.putWorkerInShift(this.shifts, this.checkIfWorkerCanWork, this.employees, this.readyToWorkArray, this.getAllWithLessHoursWorked,this.getPersonThatWorkedTheLeast, this.shuffle));
    //   // this.filterUniqueId(this.employees)
    // console.log(this.shifts)
    let array = this.putWorkerInShift(this.shifts, this.checkIfWorkerCanWork, this.employees, this.readyToWorkArray, this.getAllWithLessHoursWorked, this.getPersonThatWorkedTheLeast, this.markEmployeeFullyBooked, this.getHighestHpw, this.getLowestShiftHours, this.putWorkerInShift, this.shifts)
    console.log(array)


    // console.log(this.shifts)
    // console.log(this.getLowestShiftHours(this.shifts))
    // console.log(this.getLowestShiftHours(this.shifts2))
    // console.log(this.getHighestHpw(this.employees, this.getLowestShiftHours, this.shifts))
    // console.log(this.employees)
  }



  //NEW APROACH



  getLowestShiftHours(shifts) {
    let element1 = shifts[0].hours
    shifts.forEach(element => {
      if ( element1 > element.hours) {
        element1 = element.hours;

      }
    })
    // console.log(element1)
    return element1
  }

  getHighestHpw(employees, getLowestShiftHoursCB, shiftsArray) {
    let lowestShift = getLowestShiftHoursCB(shiftsArray)
    // console.log(lowestShift, "lowestShift")
    let result = employees.reduce(function (prev, curr) {
      return (prev.hpw > curr.hpw ) ? prev : curr;
    });
    // console.log(lowestShift, result.hpw)
    if (lowestShift <= result.hpw) {
      // console.log(result.hpw, result.Name, "result.hpw")
      return true
    } else if (lowestShift > result.hpw) {
      // console.log("no hay nadie con tantas horas")
      return false
    }
  }
  getAllWithLessHoursWorked(arrayOfEmployees, getPersonThatWorkedTheLeast) {//////shuffle?
    let personThatWorkedTheLeast = getPersonThatWorkedTheLeast(arrayOfEmployees);
    let peopleThatWorkedTheLeast = arrayOfEmployees.filter(element => {
      return element.numberOfShiftsWorked <= personThatWorkedTheLeast.numberOfShiftsWorked;
    })
    // console.log("people", peopleThatWorkedTheLeast)
    return peopleThatWorkedTheLeast
  }
  getPersonThatWorkedTheLeast(arrayOfWorkers) {         
    let objectLow = {
      id: 0,
      numberOfShiftsWorked: 0,
      hpw: 0,
      name: ""
    }
    arrayOfWorkers.forEach(function (element) {
      objectLow.id = element.id;
      objectLow.numberOfShiftsWorked = element.numberOfShiftsWorked
      objectLow.name = element.Name
      objectLow.hpw = element.hpw

      if (objectLow.hpw > element.hpw) {
        objectLow.id = element.id;
        objectLow.numberOfShiftsWorked = element.numberOfShiftsWorked
        objectLow.hpw = element.hpw

        objectLow.name = element.Name
      }
    })
    let worker = arrayOfWorkers.filter(element => {
      return element.id === objectLow.id
    })
    return worker[0]
  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }



  //FIRST APROACH

  markEmployeeFullyBooked(arrayOfEmployees, getLowestShiftHoursCB, shifts) {
    let lowestShift = getLowestShiftHoursCB(shifts)
    // console.log("markEmployee", lowestShift)
    arrayOfEmployees.forEach(element => {
      if (element.hpw === 0 || element.hpw < lowestShift) {
        element.fullyBooked = true
      }
    })
  }




  checkIfWorkerCanWork(shift, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked, getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked, getLowestShiftHoursCB, shift2General) {
    let counter = shift.workersRequired//aki
    let shouldWeContinue;
    let employees = getAllWithLessHoursWorked(arrayOfEmployees, getPersonThatWorkedTheLeastCB)
    employees.forEach(function (element) {

      if (shift.workersRequired === 0) {
        shift.fullyBooked === true;
      }
      if ((element.fullyBooked === false) && (element.hpw >= shift.hours) && (shift.workersRequired > 0 )
        && (!shift.arrayOfWorkers.includes(element))) {
        element.hpw -= shift.hours;
        element.numberOfShiftsWorked++
        shift.arrayOfWorkers.push(element)
        readyToWorkArray.push(element);
        shift.workersRequired--;
        markEmployeeFullyBooked(arrayOfEmployees, getLowestShiftHoursCB, shift2General)

      } 
      else if (element.hpw === 0) {
        element.fullyBooked = true

      } else if(element){

      }
      // else if(getHighestHpwCB(getLowestShiftHoursCB !== false)){
      //   // thisCallback(shift, bagOfWorkers, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked ,getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked)
      // }
    })

  }
  putWorkerInShift(shifts, callback, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked, getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked, getHighestHpwCB, getLowestShiftHoursCB, thisCallBack, shift2General) {
    let shouldWeContinue;


    shifts.forEach(function (element) {
      callback(element, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked, getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked, getLowestShiftHoursCB, shift2General)
      shouldWeContinue = getHighestHpwCB(arrayOfEmployees, getLowestShiftHoursCB, shifts)

      // console.log(shouldWeContinue)

      if (shouldWeContinue === true) {
         callback(element, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked, getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked, getLowestShiftHoursCB, shift2General)

        //  console.log(shouldWeContinue)

      }if(shouldWeContinue === true){
        // callback(element, arrayOfEmployees, readyToWorkArray, getAllWithLessHoursWorked, getPersonThatWorkedTheLeastCB, markEmployeeFullyBooked, getLowestShiftHoursCB, shift2General)


      }

     

    })
    return [arrayOfEmployees, readyToWorkArray, shifts]
  }
























 // filterUniqueId(arrayOfEmployees) {

  //   let arrayWithUniqueIds = arrayOfEmployees.filter((element1, pos) => {
  //     return arrayOfEmployees.indexOf(element1) == pos
  //   })

  //   return (arrayWithUniqueIds)
  // }









 
  // test(shifts, readyToWorkArray) {
  //   shifts.forEach(function (element) {
  //     for (let employee of readyToWorkArray) {
  //       if (!element.arrayOfWorkers.includes(employee) && element.fullyBooked === false && element.hours > employee.hpw)
  //         element.arrayOfWorkers.push(employee);
  //     }
  //   })
  //   return shifts
  // }



















  // startFillingShifts(thiscallback, arrayOfShifts, callback, callback2, arrayEmployees, readyToWorkArray){

  //   arrayOfShifts.forEach(function(element){
  //     let rightWorker = callback(callback2, arrayEmployees)

  //     // console.log(element.arrayOfWorkers, rightWorker, rightWorker.hpw, element.hours,  element.workersRequired)

  //     if((!element.arrayOfWorkers.includes(rightWorker))&& (rightWorker.hpw >= element.hours) && (element.workersRequired >= 1) && (element.fullyBooked === false) ){
  //       rightWorker.hpw -= element.hours
  //       rightWorker.numberOfShiftsWorked++
  //       element.workersRequired--
  //       element.arrayOfWorkers.push(rightWorker)
  //       readyToWorkArray.push(rightWorker)
  //       // console.log("si")
  //     }else if(element.workersRequired === 0){
  //       element.fullyBooked = true
  //       // console.log("no")

  //       return
  //     }else if(element.fullyBooked === false && (!element.arrayOfWorkers.includes(rightWorker))&& (rightWorker.hpw >= element.hours) && (element.workersRequired >= 1)){
  //       // thiscallback(thiscallback, arrayOfShifts, callback, callback2, arrayEmployees, readyToWorkArray)

  //     }else{
  //       return
  //     }

  //   })
  // }


  // findWorker(callback, arrayEmployees){
  // let rightWorker = callback(arrayEmployees)
  //   let worker = arrayEmployees.filter(function(element){
  //     return element.id === rightWorker.id
  //   })
  //   console.log(worker)
  //   return worker[0];
  // }



  // getHowManyPeopleForAllShifts(arrayOfShifts){
  //  let numberOfWorkers = 0;
  //   arrayOfShifts.forEach(function(element){
  //    numberOfWorkers += element.workersRequired;
  //     console.log(numberOfWorkers, element.workersRequired)
  //   })

  //   return numberOfWorkers;
  // }




}
