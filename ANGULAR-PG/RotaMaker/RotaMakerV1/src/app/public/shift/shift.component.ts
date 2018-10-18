import { Component, OnInit } from '@angular/core';
import { WlistService } from '../../common/services/wlist.service';
import { Worker } from '../../public/models/worker.model';
import { Shift } from '../../public/models/shift.model';
import { ShiftsService } from '../../common/services/shifts.service';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  wRequired = 8;
  _workers;
  hours: number;
  employees : Array<Worker>;
  shifts: Array<Shift>;


  constructor( public _wlistservice: WlistService, public _shiftsService: ShiftsService) { 
    this._workers = this.shuffle(this._wlistservice.getAllUsers());
    this.hours = 7;
    this.shifts = this._shiftsService.allShifts();
  }

  ngOnInit() {
      console.log(this.setWorkersInShift());
      // this.removeHoursToWorker();
      console.log(this.shifts)
      console.log(this.totalWorkersNeeded())
    this.setInShifts()
  }


  



  removeHoursToWorker(){
    let h = this.hours;
    this.employees.forEach(function (item){
      if(item.hpw < h ){
        
        console.log(item.Name + ' ' + "no esta permitido overtime")
     return;
      
      }else{
        item.hpw -= h;
      }
    })
    
}

totalWorkersNeeded(){
  let variable = 0;
  this.shifts.forEach(function(item){
    variable += item.workersRequired;
  })
  return variable;
}

setInShifts(){
  let empl = this._workers;
  let variable = this.selectWorkers(this.hours, this.totalWorkersNeeded(), empl);
  this.shifts.forEach(function(item){
    let eachShift = item.workersRequired;
    console.log(eachShift)
    let workersForEachShift = variable.splice(eachShift);
    console.log(workersForEachShift)
  })
}


  setWorkersInShift(): Array<Worker>{
    let empl = this._workers;
   return this.selectWorkers(this.hours, this.totalWorkersNeeded(), empl);
    // console.log(this.employees)
    
  }

  selectWorkers(hours:number, workersNeeded: number, workersArray: Array<Worker>): Array<Worker>{
    // let workersNeeded = this.wRequired;
    // let hours = this.hours;
    let _workers = [];
    workersArray.forEach(function(item){
      if(item.hpw < hours){
        return;
      }else{
        _workers.push(item)
        }
    })
    _workers.splice(workersNeeded)
    this.shuffle(_workers)
    console.log(_workers)
    
    return _workers;
  }
  
  shuffle (array) {
      let i = 0
        , j = 0
        , temp = null
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
    
    
    
  




}
