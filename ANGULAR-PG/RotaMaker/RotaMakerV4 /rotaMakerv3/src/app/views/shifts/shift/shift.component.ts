import { Component, OnInit } from '@angular/core';
import { ShiftsService } from 'src/app/services/shifts.service';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { Shift } from 'src/app/models/shift';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DaysetupComponent } from '../../calendar/week/daysetup/daysetup.component'
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css'],
})
export class ShiftComponent implements OnInit {


  // horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
  horas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]

  data;
  roles: Array<Role> = [];

  bsModalRef: BsModalRef;

  

  constructor(public _shiftsService: ShiftsService, private toastr: ToastrService, public modalService: BsModalService, public _rolesService: RoleService) { }

  ngOnInit() {
    this.getShifts();
    this.getRoles();
  }
deletetest(id1){
  this._shiftsService.deleteShift(id1).subscribe((res)=>{
    console.log(res)
  })

 
}

  saveForm(form?: NgForm){
    const newShift = new Shift();
    newShift.workersRequired = form.value.workersRequired;
    newShift.hours =  parseInt(form.value.timeFinish) - parseInt(form.value.timeStart);
    newShift.timeStart = form.value.timeStart;
    newShift.timeFinish = form.value.timeFinish;
    newShift.arrayOfWorkers = [];
    newShift.day = this.data[0];
    newShift.role = form.value.role;
    newShift.fullyBooked = false;
  
    console.log(newShift)

    if(!form.value._id){

      this._shiftsService.createShift(newShift).subscribe((res) => {
        this.resetForm(form);
        this.toastr.success('', 'Saved Successfully!', {timeOut: 1000} );
        this.modalService.hide(1)
      })
    }else{
      this._shiftsService.updateShift(form.value).subscribe(res => {
        console.log(res)
        this.resetForm(form);
        this.getShifts();
        this.toastr.success('', 'Successfully Updated!', {timeOut: 1000});
      });
    }
  }


  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this._shiftsService.selectedShift = new Shift();
    }
  }


  getShifts(){
    this._shiftsService.getShifts().subscribe((res) => {
      this._shiftsService.shifts = res as Shift[];
      console.log(res)
    })
  }

  updateShift(shift: Shift){
    this._shiftsService.selectedShift = shift;
   }

   getRoles(){
     this._rolesService.getRoles().subscribe((res) => {
       this.roles = res as Role[];
     })
   }

}
