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

  constructor(public _workersService: WorkersService, public _shiftService: ShiftsService) { 
    this.employees = this._workersService.getAllEmployees();
    this.shifts = this._shiftService.getAllShifts();
  }

  ngOnInit() {
    console.log(this.shifts)
    console.log(this.employees)
    this.removeAllWorkersThatCantDoASingleShift(this.employees, this.shifts)
    this.test(this.employees,9)
    console.log(this.test1(this.employees, this.shifts))
  }

  removeAllWorkersThatCantDoASingleShift(arrayWorkers: Array<Employee>, arrayShifts: Array<Shift>){
    arrayWorkers.forEach(function(item){
      arrayShifts.forEach(function(item2){
        if(item.hpw >= item2.hours){
         
          
        }else{
          return;
        }
      })
    })
}

takeOnlyTheNeededEmployees(shiftWrequired, arrayInShift, worker){



}

public test1(arrayW, arrayS, callback){
arrayS.forEach(function(element){
  let hours = element.hours;
  callback();
})
}

test(arrayworkers, hours){
arrayworkers.forEach(element => {
  if(this.returnTrueFalseIfCantWork(element, hours )){

  }
});
}

test2(arrayWorkers, hours, arrayShifts){
 let workers =  arrayWorkers.splice(hours);
 arrayShifts.push(workers)
  
}

returnTrueFalseIfCantWork(worker, hours){
if(!worker.hpw >= hours){
  return
}else{
  return true;
}
}





}
