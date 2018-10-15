import { Component, OnInit } from '@angular/core';
import { WlistService } from '../../common/services/wlist.service';
import { Worker } from '../../public/models/worker.model';
import { isNgTemplate } from '@angular/compiler';
import { ChangeDetectorRef } from '@angular/core';



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


  constructor( public _wlistservice: WlistService, private changeDetector: ChangeDetectorRef) { 
    this._workers = this.shuffle(this._wlistservice.getAllUsers());
    this.hours = 7;
  }

  ngOnInit() {
      this.setWorkersInShift();
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

  setWorkersInShift(): Array<Worker>{
    this.employees = this.selectWorkers();
    this.removeHoursToWorker()
    console.log(this.employees)
    return this.employees;
  }

  selectWorkers(): Array<Worker>{
    let workersNeeded = this.wRequired;
    let hours = this.hours;
    let _workers = [];
    this._workers.forEach(function(item){
      if(item.hpw < hours){
        return;
      }else{
        _workers.push(item)
        }
    })
    _workers.splice(workersNeeded)
    this.shuffle(_workers)

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
