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
  readyToWorkArray;


  constructor(public _workersService: WorkersService, public _shiftService: ShiftsService) { 
    this.employees = this._workersService.getAllEmployees();
    this.shifts = this._shiftService.getAllShifts();
    this.readyToWorkArray = [];

  }

  ngOnInit() {
    // this.checkIfWorkerCanWork(45, this.readyToWorkArray)
    this.putWorkerInShift(this.checkIfWorkerCanWork, this.employees);
    console.log(this.shifts)
  }

  checkIfWorkerCanWork(shift, bagOfWorkers, arrayOfEmployees){
    arrayOfEmployees.forEach(function(element){
      
      if((element.hpw > shift.hours) && (shift.workersRequired >= 1)){
        element.hpw -= shift.hours;
        bagOfWorkers.push(element)
        shift.workersRequired--;
        console.log(element, shift)
      }else{
        shift.fullyBooked === true
        console.log("hello")
      }   
    })
  }


  putWorkerInShift(callback, arrayOfEmployees){
    this.shifts.forEach(function(element){
      if(element.fullyBooked === false){
        callback(element, element.arrayOfWorkers, arrayOfEmployees )
      }else{
        return
      }
    })
  }





}
