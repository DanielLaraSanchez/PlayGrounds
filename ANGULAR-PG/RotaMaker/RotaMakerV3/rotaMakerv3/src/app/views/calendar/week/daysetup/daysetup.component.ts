import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';
import { ShiftComponent } from 'src/app/views/shifts/shift/shift.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-daysetup',
  templateUrl: './daysetup.component.html',
  styleUrls: ['./daysetup.component.css']
})
export class DaysetupComponent implements OnInit {


  data;
  day;
  unsavedShifts = [];
  shifts: Array<Shift> = [];
  days = [{name: "Monday"},{name: "Tuesday"},{name: "Wednesday"},{name: "Thursday"},{name: "Friday"},{name: "Saturday"},{name: "Sunday"}]
  bsModalRef: BsModalRef;



  constructor(public _shiftsService: ShiftsService, public modalService: BsModalService) {
  }

  async ngOnInit() {
    this.day = this.data[0];
    this.shifts = await this.getShifts();
    console.log(this.shifts, "thisShifts")
  }

  getShifts(): any {
    /* Regresamos una promesa que se resuelve hasta que tenemos los datos listos */
    return new Promise((resolve, reject) => {
      this._shiftsService.getShifts().subscribe((responseData) => {
        resolve(responseData);
      });
    });
  }

 


     filterUnsavedShifts(){
      let shifts = this.shifts
      let result = [];
      if(shifts != null){
         result = shifts.filter((element) => {
          return element.day == this.data[0]
        })
      }
      return result
    }



    openModalShiftInput(day){
      const initialState = {
        data: [
          day
        ],
        title: 'Modal with component'
      };
      this.bsModalRef = this.modalService.show(ShiftComponent, { initialState, class: 'modal-lg' });
      this.bsModalRef.content.closeBtnName = 'Close';
    }
    

}
