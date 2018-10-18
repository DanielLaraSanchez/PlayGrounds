import { Injectable } from '@angular/core';
import { Shift } from '../../public/models/shift.model';
import { Worker } from '../../public/models/worker.model';
import { WlistService } from './wlist.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  shifts:Array<Shift> = [
    {
      "id": 1,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday"
    },
    {
      "id": 2,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday"
    },   {
      "id": 2,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed"
    },   {
      "id": 4,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday"
    },   {
      "id": 5,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday"
    },   {
      "id": 6,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday"
    },   {
      "id": 7,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday"
    },
    
  ]

  constructor(public _wlistService: WlistService) { }

  public  allShifts(){
    return this.shifts;
  }

  
}
