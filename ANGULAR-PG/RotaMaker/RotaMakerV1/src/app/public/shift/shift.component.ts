import { Component, OnInit } from '@angular/core';
import { WlistService } from '../../common/services/wlist.service';
import { Worker } from '../../public/models/worker.model';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  wRequired = 8;
  _workers = this._wlistservice.getAllUsers();
  hours:number  = 7;
  employees : Array<Worker>
  




  constructor( public _wlistservice: WlistService) { }

  ngOnInit() {
      this.shuffle(this._workers);
      this.setWorkersInShift();
      console.log(this.employees)
  }



  removeHoursToWorker(){
    let h = this.hours;
    this.employees.forEach(function callback(item){
      item.hpw -= h;
    })
}

  setWorkersInShift(): Array<Worker>{
    let workersListShuffled = []
    workersListShuffled = this.shuffle(this._workers);
    let workersNeeded = this.wRequired;
    workersListShuffled.splice(workersNeeded);
    this.employees = workersListShuffled;
    this.removeHoursToWorker();
    return this.employees;
  }


    shuffle (array) {
      var i = 0
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
