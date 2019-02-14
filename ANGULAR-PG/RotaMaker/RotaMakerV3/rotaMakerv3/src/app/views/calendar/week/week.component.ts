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
  bsModalRef: BsModalRef;

  constructor(public modalService: BsModalService, public calendarService: CalendarService) { }

  ngOnInit() {
console.log(this.data)
  }












openDayModal(data) {
  // let data = this.getWeek(day);
  
     const initialState = {
      data: [
        data
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DayComponent, {initialState, class: 'modal-lg'});
    this.bsModalRef.content.closeBtnName = 'Close';
  }



}
