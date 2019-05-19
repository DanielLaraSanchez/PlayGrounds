import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import { CalendarService } from 'src/app/services/calendar.service';
import { DayComponent } from './day/day.component';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  data;
  week = [];
  daysInYear = [];
  employees = [];
  bsModalRef: BsModalRef;

  constructor(public modalService: BsModalService, public calendarService: CalendarService) { }

  ngOnInit() {
    this.weekGenerator();
    this.empBagGenerator();
console.log(this.data)

  }


weekGenerator(){
  this.data[0].daysInWeek.forEach((day) => {
    this.week.push(day)
  })
}


empBagGenerator(){
  this.data[1].forEach((emp) => {
    this.employees.push(emp);
  })
}













}
