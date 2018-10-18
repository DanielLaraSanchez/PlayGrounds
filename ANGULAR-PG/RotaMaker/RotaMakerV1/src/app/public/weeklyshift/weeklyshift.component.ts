import { Component, OnInit } from '@angular/core';
import { ShiftComponent } from '../shift/shift.component';

@Component({
  selector: 'app-weeklyshift',
  templateUrl: './weeklyshift.component.html',
  styleUrls: ['./weeklyshift.component.css']
})
export class WeeklyshiftComponent implements OnInit {
  mondayShift: ShiftComponent;
  tuesdayShift: ShiftComponent;
  wedShift: ShiftComponent;
  thursdayShift: ShiftComponent;
  fridayShift: ShiftComponent;
  saturdayShift: ShiftComponent;
  sundayShift: ShiftComponent;

  constructor() { }

  ngOnInit() {
  }


  getMondayShift(){
    return this.mondayShift.setWorkersInShift();
  }

  getTuesdayShift(){
    return this.tuesdayShift.setWorkersInShift();
  }

  getWedShift(){
    return this.wedShift.setWorkersInShift();
  }

  getThursdayShift(){
    return this.thursdayShift.setWorkersInShift();
  }
  

}
