import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DayComponent } from '../views/day/day.component';
import { Day } from '../models/day';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {

days = [];






  constructor() {

   }


getDays(){
  return this.days;
}




  getDaysArrayByMonth() {
    var daysInMonth = moment().daysInMonth();
    var arrDays = [];
    var onlyDays = [];
    while(daysInMonth) {
      var current = moment().date(daysInMonth);
      arrDays.push(current);
      daysInMonth--;
    }
  
    arrDays.forEach(element => {
      const day = moment(element).date()
      const dayOfWeek = moment(element).format('dddd')
      const month = moment(element).format('MMMM')
      const year = moment(element).year()
      onlyDays.push({day: day, dayOfWeek: dayOfWeek, year: year, month: month, dayComponent: [], dateObject: moment(element), dayClass: new Day()});
    })
  
    this.days = onlyDays
  
   
  }
}
