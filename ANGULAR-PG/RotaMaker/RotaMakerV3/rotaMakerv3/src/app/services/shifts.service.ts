import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shift } from '../models/shift';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  readonly URL_API  = 'http://localhost:3000/api/shifts/';


  selectedShift: Shift;
  shifts: Shift[];
  unsavedShifts = [];


  constructor(public http: HttpClient) {
    this.selectedShift = new Shift();
    // sessionStorage.setItem('temporaryShifts', JSON.stringify(this.unsavedShifts))

   }






 newUnsavedShift(shift){
  sessionStorage.setItem('temporaryShifts', JSON.stringify(this.unsavedShifts))

  const shiftsArray = JSON.parse(sessionStorage.getItem('temporaryShifts'));
  shiftsArray.push(shift);
  sessionStorage.setItem('temporaryShifts', JSON.stringify(shiftsArray))
  this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShifts'))
 }


 newUnsavedShiftSetup(shift){
  sessionStorage.setItem('temporaryShiftsSetup', JSON.stringify(this.unsavedShifts))

  const shiftsArray = JSON.parse(sessionStorage.getItem('temporaryShiftsSetup'));
  shiftsArray.push(shift);
  sessionStorage.setItem('temporaryShiftsSetup', JSON.stringify(shiftsArray))
  this.unsavedShifts = JSON.parse(sessionStorage.getItem('temporaryShiftsSetup'))
 }

 getAllShiftsForRotaMaker(): Observable<any>{
   return this.unsavedShifts as any;
 }













//HTTP REQUESTS******************************************************************************

 getShifts(){
  return this.http.get(this.URL_API);
}

createShift(shift: Shift){
  return this.http.post(this.URL_API, shift)
}

updateShift(shift: Shift){
  return this.http.put(this.URL_API + `${shift._id}`, shift);
}

deleteShift(id: String){
  return this.http.delete(this.URL_API + `${id}`)
}



}
