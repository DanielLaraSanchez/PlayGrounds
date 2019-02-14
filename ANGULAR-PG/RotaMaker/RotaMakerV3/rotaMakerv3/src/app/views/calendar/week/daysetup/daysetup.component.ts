import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';


@Component({
  selector: 'app-daysetup',
  templateUrl: './daysetup.component.html',
  styleUrls: ['./daysetup.component.css']
})
export class DaysetupComponent implements OnInit {


  data;
  day;
  unsavedShifts = [];
  days = [{name: "Monday"},{name: "Tuesday"},{name: "Wednesday"},{name: "Thursday"},{name: "Friday"},{name: "Saturday"},{name: "Sunday"}]
  constructor(public shiftService: ShiftsService) {
   }

  ngOnInit() {
    this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShiftsSetup'))
    // console.log(this.unsavedShifts)
    console.log(this.data)
  
  }


  addShift(){
    const newShift = new Shift()
    newShift.arrayOfWorkers = [];
    newShift.workersRequired = 7;
    newShift.hours = 8;
    newShift.day = this.data[0];
    newShift.fullyBooked = false;
    newShift.date = undefined;
    console.log(newShift)
    this.shiftService.newUnsavedShiftSetup(newShift) 
   }

   getHours(date){
    var m = moment(date); // your moment object, however you create it.
    var a = moment(m).startOf('day');
    var b = moment(m).add(1, 'day').startOf('day');
    var h = b.diff(a, 'hours'); // 23, 24, 25, etc.
    // let hour = moment(22).format('HH')
    // console.log(hour, "hour")
    return h;
   }



    filterUnsavedShifts(){

      this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShiftsSetup'))
      let result = [];
      if(this.unsavedShifts != null){
         result = this.unsavedShifts.filter((element) => {
          return element.day == this.data[0]
        })
      }
    
      return result
    }

}
