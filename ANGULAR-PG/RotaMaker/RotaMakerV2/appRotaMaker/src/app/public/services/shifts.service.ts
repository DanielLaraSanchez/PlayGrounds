import { Injectable } from '@angular/core';
import { Shift } from '../models/shift.model';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  shiftss:Array<Shift> = [
    {
      "id": 1,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    }
    ,
    {
      "id": 2,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 3,
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

    }
    ,   {
      "id": 7,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },

    {
      "id": 8,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 9,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 10,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 11,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 12,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 13,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 14,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },
    {
      "id": 15,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    }
    ,
    {
      "id": 16,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 17,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 18,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 19,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 20,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    }
    ,   {
      "id": 21,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },
    {
      "id": 22,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 23,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id":24,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 25,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 26,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 27,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 28,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    }
    // ,
    // {
    //   "id": 29,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 7,
    //   "day": "Monday",
    //   "fullyBooked": false

    // },
    // {
    //   "id": 30,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 8,
    //   "day": "Tuesday",
    //   "fullyBooked": false

    // },   {
    //   "id": 31,
    //   "workersRequired": 7,
    //   "arrayOfWorkers": [],
    //   "hours": 9,
    //   "day": "Wed",
    //   "fullyBooked": false

    // },   {
    //   "id": 32,
    //   "workersRequired": 8,
    //   "arrayOfWorkers": [],
    //   "hours": 12,
    //   "day": "Thursday",
    //   "fullyBooked": false

    // },   {
    //   "id": 33,
    //   "workersRequired": 2,
    //   "arrayOfWorkers": [],
    //   "hours": 10,
    //   "day": "Friday",
    //   "fullyBooked": false

    // },   {
    //   "id": 34,
    //   "workersRequired": 9,
    //   "arrayOfWorkers": [],
    //   "hours": 6,
    //   "day": "Saturday",
    //   "fullyBooked": false

    // },   {
    //   "id": 35,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 8,
    //   "day": "Sunday",
    //   "fullyBooked": false
    // },
    // {
    //   "id": 36,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 7,
    //   "day": "Monday",
    //   "fullyBooked": false

    // },
    // {
    //   "id": 37,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 8,
    //   "day": "Tuesday",
    //   "fullyBooked": false

    // },   {
    //   "id": 38,
    //   "workersRequired": 7,
    //   "arrayOfWorkers": [],
    //   "hours": 9,
    //   "day": "Wed",
    //   "fullyBooked": false

    // },   {
    //   "id": 39,
    //   "workersRequired": 8,
    //   "arrayOfWorkers": [],
    //   "hours": 12,
    //   "day": "Thursday",
    //   "fullyBooked": false

    // },   {
    //   "id": 39,
    //   "workersRequired": 2,
    //   "arrayOfWorkers": [],
    //   "hours": 10,
    //   "day": "Friday",
    //   "fullyBooked": false

    // },   {
    //   "id": 40,
    //   "workersRequired": 9,
    //   "arrayOfWorkers": [],
    //   "hours": 6,
    //   "day": "Saturday",
    //   "fullyBooked": false

    // },   {
    //   "id": 41,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 8,
    //   "day": "Sunday",
    //   "fullyBooked": false
    // },
    // {
    //   "id": 42,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 7,
    //   "day": "Monday",
    //   "fullyBooked": false

    // },
    // {
    //   "id": 43,
    //   "workersRequired": 4,
    //   "arrayOfWorkers": [],
    //   "hours": 8,
    //   "day": "Tuesday",
    //   "fullyBooked": false

    // },   {
    //   "id": 44,
    //   "workersRequired": 7,
    //   "arrayOfWorkers": [],
    //   "hours": 9,
    //   "day": "Wed",
    //   "fullyBooked": false

    // },   {
    //   "id": 45,
    //   "workersRequired": 8,
    //   "arrayOfWorkers": [],
    //   "hours": 12,
    //   "day": "Thursday",
    //   "fullyBooked": false

    // },   {
    //   "id": 46,
    //   "workersRequired": 2,
    //   "arrayOfWorkers": [],
    //   "hours": 10,
    //   "day": "Friday",
    //   "fullyBooked": false

    // },   {
    //   "id": 47,
    //   "workersRequired": 9,
    //   "arrayOfWorkers": [],
    //   "hours": 6,
    //   "day": "Saturday",
    //   "fullyBooked": false

    // }
    
    
  ]

  shiftss2:Array<Shift> = [
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
      "id": 3,
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
    {
      "id": 8,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 9,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 10,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 11,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 12,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 13,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 14,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },
    {
      "id": 15,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 16,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id": 17,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 18,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 19,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 20,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 21,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    },
    {
      "id": 22,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 7,
      "day": "Monday",
      "fullyBooked": false

    },
    {
      "id": 23,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Tuesday",
      "fullyBooked": false

    },   {
      "id":24,
      "workersRequired": 7,
      "arrayOfWorkers": [],
      "hours": 9,
      "day": "Wed",
      "fullyBooked": false

    },   {
      "id": 25,
      "workersRequired": 8,
      "arrayOfWorkers": [],
      "hours": 12,
      "day": "Thursday",
      "fullyBooked": false

    },   {
      "id": 26,
      "workersRequired": 2,
      "arrayOfWorkers": [],
      "hours": 10,
      "day": "Friday",
      "fullyBooked": false

    },   {
      "id": 27,
      "workersRequired": 9,
      "arrayOfWorkers": [],
      "hours": 6,
      "day": "Saturday",
      "fullyBooked": false

    },   {
      "id": 28,
      "workersRequired": 4,
      "arrayOfWorkers": [],
      "hours": 8,
      "day": "Sunday",
      "fullyBooked": false
    }
    
    
  ]


  constructor() { }

  getAllShifts(){
    return this.shiftss;
  }

  getAllShifts2(){
    return this.shiftss2;
  }
}
