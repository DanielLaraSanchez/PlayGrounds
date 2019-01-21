import { Shift } from "./shift";

export class Employee {



    constructor(_id = '', name = '', position = '',  hpw = 0, salary = 0, fullyBooked = false, shiftsWorked = []){ 
        this._id = _id;
        this.name = name;
        this.position = position;
        this.hpw = hpw;
        this.salary = salary;
        this.fullyBooked = fullyBooked;
        this.shiftsWorked = shiftsWorked;
    }





    _id: String;
    name: String;
    position: String;
    hpw: Number;
    salary: Number;
    fullyBooked: boolean;
    shiftsWorked: Shift[];



}

