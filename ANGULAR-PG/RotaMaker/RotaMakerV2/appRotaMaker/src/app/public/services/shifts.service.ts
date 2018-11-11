import { Injectable } from '@angular/core';
import { Shift } from '../models/shift.model';

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
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 2,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 2,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 4,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 5,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 6,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 7,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },
    
  ]


  constructor() { }

  getAllShifts(){
    return this.shifts;
  }
}
