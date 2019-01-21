import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from 'src/app/services/calendar.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Modal1Component } from 'src/app/utility/modal1/modal1.component';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers:[BsModalService]
})
export class CalendarComponent implements OnInit {

days = [];
bsModalRef: BsModalRef;


  constructor(public calendarService: CalendarService, private modalService: BsModalService) { 
  }

  

  ngOnInit() {
    this.calendarService.getDaysArrayByMonth()
    this.days = this.calendarService.days
    console.log(this.calendarService.days)
    console.log(this.getWeeksInMonth())
   
  }



  openModal1(day) {
     const initialState = {
      data: [
        day
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(Modal1Component, {initialState, class: 'modal-lg'});
    this.bsModalRef.content.closeBtnName = 'Close';
    console.log(this.bsModalRef, "bsmodlaref from calendar")
  }



getWeeksInMonth(){
 
let date = moment().date()
let weeks = moment(date).weeksInYear()
return weeks

}


}