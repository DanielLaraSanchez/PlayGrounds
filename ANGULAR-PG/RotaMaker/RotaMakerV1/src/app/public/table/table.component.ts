import { Component, OnInit } from '@angular/core';
import { WeeklyshiftComponent } from '../weeklyshift/weeklyshift.component';
import { WlistService } from '../../common/services/wlist.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  shift: WeeklyshiftComponent;


  constructor(public _wlistService: WlistService) { }

  ngOnInit() {
  }

setMonday(){
   return this.shift.getMondayShift()
}

getWorkers(){
  return this._wlistService.getWorkers();
}
  
}
