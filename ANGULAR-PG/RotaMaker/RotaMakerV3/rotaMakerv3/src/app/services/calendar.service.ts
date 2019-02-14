import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Day } from '../models/day';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {

days = [];
week = [];
daysInYear = []





  constructor() {

   }


// getDays(){
//   return this.days;
// }

// getWeek(day){
// const result = this.days.filter((element) => {
//   return element.week === day
// })

// return result
// }

// getMonths(){
//  const result = Array.apply(0, Array(12)).map(function(_,i){
//     return moment().month(i).format('M')})
// return result
// }

// getThisMonth(){
// let test = moment().weeksInYear()
// console.log(test, "test")
// }

//   getDaysArrayByMonth() {
//     var daysInMonth = moment().daysInMonth();
//     let arrDaysInYear = [];
//     var arrDays = [];
//     var onlyDays = [];
//     let year = moment().year()
//     let test = this.getMonths();
//       while(daysInMonth) {
//         var current = moment().date(daysInMonth);
//         arrDays.push(current);
//         arrDaysInYear.push(current)
//         daysInMonth--;
//       }
//     arrDays.forEach(element => {
//       const day = moment(element).date()
//       const dayOfWeek = moment(element).format('dddd')
//       const month = moment(element).format('MMMM')
//       const year = moment(element).year()
//       const week = moment(element).week()
//       onlyDays.push({day: day, dayOfWeek: dayOfWeek, year: year, month: month, dayComponent: [], dateObject: moment(element), dayClass: new Day(), week: week});
//     })
//     this.days = onlyDays
//   }


//   getDaysArrayByYear() {
//     let arrDaysInYear = [];
//     var arrDays = [];
//     var onlyDays = [];
//     let year = moment().year()
//     let test = this.getMonths();
//     test.forEach((element) => {
//       var daysInMonth = moment(element).daysInMonth();
//       while(daysInMonth) {
//         var current = moment().date(daysInMonth);
//         arrDays.push(current);
//         arrDaysInYear.push(current)
//         daysInMonth--;
//       }
//     })  
//     arrDays.forEach(element => {
//       const day = moment(element).date()
//       const dayOfWeek = moment(element).format('dddd')
//       const month = moment(element).format('MMMM')
//       const year = moment(element).year()
//       const week = moment(element._d).isoWeek()
//       onlyDays.push({day: day, dayOfWeek: dayOfWeek, year: year, month: month, dayComponent: [], dateObject: moment(element), dayClass: new Day(), week: week});
//     })
//     this.daysInYear = onlyDays
//   }






}
