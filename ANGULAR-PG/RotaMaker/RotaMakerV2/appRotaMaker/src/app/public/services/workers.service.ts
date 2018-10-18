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
  },
  {
    'id': 2,
    'Name':'Monica',
    'hpw':30
  },
  {
    'id':3,
    'Name':'Nira',
    'hpw': 20
  },
  {
    'id':4,
    'Name': 'Jose',
    'hpw': 40
  },
  {
    'id':5,
    'Name': 'Antonia',
    'hpw': 40
  },
  {
    'id':6,
    'Name': 'Loida',
    'hpw': 46
  },
  {
    'id':7,
    'Name': 'Oscar',
    'hpw': 33
  },
  {
    'id':8,
    'Name': 'Irene',
    'hpw': 40
  },
  {
    'id':9,
    'Name': 'Loco',
    'hpw': 40
  },
  {
    'id':10,
    'Name': 'Pio',
    'hpw': 40
  },
  {
    'id' : 11,
    'Name':'Joaquin',
    'hpw':40,
  },
  {
    'id': 12,
    'Name':'Andrea',
    'hpw':30
  },
  {
    'id':13,
    'Name':'Susana',
    'hpw': 20
  },
  {
    'id':14,
    'Name': 'Fermin',
    'hpw': 40
  },
  {
    'id':15,
    'Name': 'Lucas',
    'hpw': 40
  },
  {
    'id':16,
    'Name': 'Pepe',
    'hpw': 46
  },
  {
    'id':17,
    'Name': 'Anthony',
    'hpw': 33
  },
  {
    'id':18,
    'Name': 'Pedro',
    'hpw': 20
  },
  {
    'id':19,
    'Name': 'Luis',
    'hpw': 30
  },
  {
    'id':20,
    'Name': 'Roberto',
    'hpw': 40
  },
  {
    'id' : 21,
    'Name':'Junajo',
    'hpw':40,
  },
  {
    'id': 22,
    'Name':'Esteban',
    'hpw':30
  },
  {
    'id':23,
    'Name':'Raul',
    'hpw': 20
  },
  {
    'id':24,
    'Name': 'Xema',
    'hpw': 40
  },
  {
    'id':25,
    'Name': 'J.Luis',
    'hpw': 40
  },
  {
    'id':26,
    'Name': 'Rebeca',
    'hpw': 46
  },
  {
    'id':27,
    'Name': 'Cristina',
    'hpw': 33
  },
  {
    'id':28,
    'Name': 'Estela',
    'hpw': 40
  },
  {
    'id':29,
    'Name': 'Belen',
    'hpw': 40
  },
  {
    'id':30,
    'Name': 'Rocio',
    'hpw': 40
  },
  {
    'id' : 31,
    'Name':'Pele',
    'hpw':40,
  },
  {
    'id': 32,
    'Name':'Carmen',
    'hpw':33
  },
  {
    'id':33,
    'Name':'Sonia',
    'hpw': 40
  },
  {
    'id':34,
    'Name': 'Dolores',
    'hpw': 30
  },
  {
    'id':35,
    'Name': 'Benito',
    'hpw': 10
  },
  {
    'id':36,
    'Name': 'Luisa',
    'hpw': 36
  },
  {
    'id':37,
    'Name': 'Gorge',
    'hpw': 43
  },
  {
    'id':38,
    'Name': 'Sancho',
    'hpw': 25
  },
  {
    'id':39,
    'Name': 'Juan',
    'hpw': 30
  },
  {
    'id':40,
    'Name': 'Alfonso',
    'hpw': 50
  }
]


  constructor() { }

  getAllEmployees(){
    return this.workers;
  }
}
