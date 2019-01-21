import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ShiftsService } from 'src/app/services/shifts.service';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component implements OnInit {
  data;
  shifts: Shift[];
  dayShifts = []
  
//  array =   sessionStorage.setItem('temporaryShifts', JSON.stringify(this.array))




  selectedShift = {};
// unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShifts'))
unsavedShifts = []
  bsModalRef: BsModalRef;
  constructor(public modalService: BsModalService, public shiftsService: ShiftsService) {


    
  }

  ngOnInit() {
   

    console.log(this.data)
    this.getThisShifts()

  }

  newUnsavedShift(){
    const newShift = new Shift()
    newShift.workersRequired = 7;
    newShift.hours = 8;
    newShift.day = this.data[0].day;
    this.shiftsService.newUnsavedShift(newShift)
  }

  getThisShifts(){
    return this.shifts;
  }

getShifts(){
  this.shiftsService.getShifts().subscribe(res => {
    let array = [res as Shift]
    this.shifts = array;

  })
}

// getUnsavedShifts(){
//   console.log(JSON.parse('temporaryShifts'))
// }

// newShift() {
//   this.selectedShift = new Shift();
//   this.selectedShift['day'] = this.data[0].day
//   // this.dayShifts.push(this.selectedShift)
//   // this.selectedShiftJson.push(this.selectedShift)
//   let array = sessionStorage.getItem('shiftsArray')
//   console.log()
// }




filterUnsavedShifts(){
  this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShifts'))
  console.log(this.unsavedShifts)
  const result = this.unsavedShifts.filter((element) => {
    return element.day == this.data[0].day
  })

  return result
}










}
