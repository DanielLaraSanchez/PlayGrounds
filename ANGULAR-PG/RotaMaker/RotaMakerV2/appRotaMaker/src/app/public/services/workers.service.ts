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
    'hpw':16,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 2,
    'Name':'Monica',
    'hpw':30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false,
    
  },
  {
    'id':3,
    'Name':'Nira',
    'hpw': 20,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':4,
    'Name': 'Jose',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':5,
    'Name': 'Antonia',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':6,
    'Name': 'Loida',
    'hpw': 46,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':7,
    'Name': 'Oscar',
    'hpw': 33,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':8,
    'Name': 'Irene',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':9,
    'Name': 'Loco',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':10,
    'Name': 'Pio',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 11,
    'Name':'Joaquin',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 12,
    'Name':'Andrea',
    'hpw':30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':13,
    'Name':'Susana',
    'hpw': 20,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':14,
    'Name': 'Fermin',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':15,
    'Name': 'Lucas',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':16,
    'Name': 'Pepe',
    'hpw': 46,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':17,
    'Name': 'Anthony',
    'hpw': 33,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':18,
    'Name': 'Pedro',
    'hpw': 20,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':19,
    'Name': 'Luis',
    'hpw': 30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':20,
    'Name': 'Roberto',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 21,
    'Name':'Junajo',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 22,
    'Name':'Esteban',
    'hpw':30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':23,
    'Name':'Raul',
    'hpw': 20,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':24,
    'Name': 'Xema',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':25,
    'Name': 'J.Luis',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':26,
    'Name': 'Rebeca',
    'hpw': 46,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':27,
    'Name': 'Cristina',
    'hpw': 33,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':28,
    'Name': 'Estela',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':29,
    'Name': 'Belen',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':30,
    'Name': 'Rocio',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id' : 31,
    'Name':'Pele',
    'hpw':40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id': 32,
    'Name':'Carmen',
    'hpw':33,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':33,
    'Name':'Sonia',
    'hpw': 40,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':34,
    'Name': 'Dolores',
    'hpw': 30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':35,
    'Name': 'Benito',
    'hpw': 10,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':36,
    'Name': 'Luisa',
    'hpw': 36,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':37,
    'Name': 'Gorge',
    'hpw': 43,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':38,
    'Name': 'Sancho',
    'hpw': 25,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':39,
    'Name': 'Juan',
    'hpw': 30,
    'numberOfShiftsWorked':0,
    'fullyBooked': false
  },
  {
    'id':40,
    'Name': 'Alfonso',
    'hpw': 50,
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
