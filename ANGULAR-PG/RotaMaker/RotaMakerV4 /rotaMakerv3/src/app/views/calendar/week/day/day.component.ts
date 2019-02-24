import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  data;
  day;
  unsavedShifts = [];
  constructor(public shiftService: ShiftsService) {
   }

  ngOnInit() {
    this.day = this.data[0].format('L')
    console.log(this.getHours(moment(this.data[0])))
    this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShifts'))
    // console.log(this.unsavedShifts)
    // console.log(this.day)
  }


  addShift(date){
    const newShift = new Shift()
    newShift.arrayOfWorkers = [];
    newShift.workersRequired = 7;
    newShift.hours = 8;
    newShift.day = this.data[0].day;
    newShift.fullyBooked = false;
    newShift.date = this.day;
    console.log(newShift)
    this.shiftService.newUnsavedShift(newShift) 
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

      this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShifts'))
      let result = [];
      if(this.unsavedShifts != null){
         result = this.unsavedShifts.filter((element) => {
          console.log(element.weekNumber, moment(this.data[0]).format('W'))
          // if(element.dayWeek == moment(this.data[0]).format('W'))
          return element.day === moment(this.data[0]).format('dddd')
        })
      }
     console.log(result)
      return result
    }



}


