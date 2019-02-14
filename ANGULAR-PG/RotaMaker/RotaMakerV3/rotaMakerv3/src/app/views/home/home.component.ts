import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TestingCompilerFactoryImpl } from '@angular/platform-browser-dynamic/testing/src/compiler_factory';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dates = [];

  constructor() { }

  ngOnInit() {
   this.dates = this.getAllWeeksInYear();

   console.log(this.dates)
  }


  getAllWeeksInYear() {
    let todaysYearsMonthsNumber = moment().isoWeeksInYear();
    let test = moment('7', 'WWW').startOf('isoWeek')
    let arrayDays = [];

    for(let i = 0; i < todaysYearsMonthsNumber; i++){
      arrayDays.push({ weekNumber: i + 1, daysInWeek: this.getAllDaysInWeek(i + 1), month: this.getAllDaysInWeek(i + 1)[0].month})
    }
    return arrayDays
  }

  getAllDaysInWeek(week) {
    let startOfWeek = moment(`${week}`, 'WWW').startOf('isoWeek');
    let endOfWeek = moment(`${week}`, 'WWW').endOf('isoWeek');

    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      days.push({dayDate: day.toDate(), arrayOfShifts: [], dayName: day.format('dddd'), dayNumber: day.format('D'), month: day.format('MMMM') ,dayYear: day.format('Y')});
      day = day.clone().add(1, 'd');
    }
    return days
  }
  

  getDaysInWeek() {
    let startOfWeek = moment().startOf('isoWeek');
    let endOfWeek = moment().endOf('isoWeek');

    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    return days
  }

  getWeeksInMonth() {
    let date = moment().date()
    let weeks = moment(date).weeksInYear()
    return weeks

  }











}
