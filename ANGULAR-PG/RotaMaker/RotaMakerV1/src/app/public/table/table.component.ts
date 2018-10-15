import { Component, OnInit } from '@angular/core';
import { ShiftComponent } from '../shift/shift.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

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

setMonday(){
  this.mondayShift.setWorkersInShift();
}
  
}
