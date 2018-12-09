import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  workers: Array<Employee> = [
    {
    'id' : 1,
    'Name':'Daniel',
    'hpw':40,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 2,
    'Name':'Monica',
    'hpw':40,    'numberOfShiftsWorked':0,
    'fullyBooked': false,
    
  },
  {
    'id':3,
    'Name':'Nira',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':4,
    'Name': 'Jose',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':5,
    'Name': 'Antonia',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':6,
    'Name': 'Loida',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':7,
    'Name': 'Oscar',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':8,
    'Name': 'Irene',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':9,
    'Name': 'Loco',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':10,
    'Name': 'Pio',
    'hpw':22,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 11,
    'Name':'Joaquin',
    'hpw':30,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 12,
    'Name':'Andrea',
    'hpw':15,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':13,
    'Name':'Susana',
    'hpw':45,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':14,
    'Name': 'Fermin',
    'hpw':33,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':15,
    'Name': 'Lucas',
    'hpw':25,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':16,
    'Name': 'Pepe',
    'hpw':15,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':17,
    'Name': 'Anthony',
    'hpw':20,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':18,
    'Name': 'Pedro',
    'hpw':30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':19,
    'Name': 'Luis',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':20,
    'Name': 'Roberto',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 21,
    'Name':'Junajo',
    'hpw':20,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 22,
    'Name':'Esteban',
    'hpw':20,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':23,
    'Name':'Raul',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':24,
    'Name': 'Xema',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':25,
    'Name': 'J.Luis',
    'hpw':2,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':26,
    'Name': 'Rebeca',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':27,
    'Name': 'Cristina',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':28,
    'Name': 'Estela',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':29,
    'Name': 'Belen',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':30,
    'Name': 'Rocio',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 31,
    'Name':'Pele',
    'hpw':40,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 32,
    'Name':'Carmen',
    'hpw':40,    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':33,
    'Name':'Sonia',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':34,
    'Name': 'Dolores',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':35,
    'Name': 'Benito',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':36,
    'Name': 'Luisa',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':37,
    'Name': 'Gorge',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':38,
    'Name': 'Sancho',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':39,
    'Name': 'Juan',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':40,
    'Name': 'Alfonso',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  }
]


  constructor() { }

  getAllEmployees(){
    return this.workers;
  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}







}
