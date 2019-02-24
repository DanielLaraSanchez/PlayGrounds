import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Day } from '../models/day';
import { HttpClient } from '@angular/common/http';
import { Week } from '../models/week';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  readonly URL_API  = 'http://localhost:3000/api/weeks/';


  constructor(public http: HttpClient) {

   }


   getWeeks(){
    return this.http.get(this.URL_API);
  }
  
  createWeek(week: Week){
    return this.http.post(this.URL_API, week)
  }
  
  updateWeek(week: Week){
    return this.http.put(this.URL_API + `${week.id}`, week);
  }
  
  deleteWeek(id: String){
    return this.http.delete(this.URL_API + `${id}`)
  }






}
