import { Shift } from "./shift";

export class Employee {



    constructor(_id = '', name = '', position = '',  hpw = 0, salary = 0, fullyBooked = false, shiftsWorked = [], colleagues = [], hworked = 0, aviability = {Monday:[], Tuesday:[], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: []}){ 
        this._id = _id;
        this.name = name;
        this.position = position;
        this.hpw = hpw;
        this.salary = salary;
        this.fullyBooked = fullyBooked;
        this.shiftsWorked = shiftsWorked;
        this.colleagues = colleagues;
        this.hworked = hworked;
        this.aviability = aviability;
    }





    _id: String;
    name: String;
    position: String;
    hpw: number;
    salary: Number;
    fullyBooked: boolean;
    shiftsWorked: Shift[];
    colleagues: Array<any>;
    hworked: number;
    aviability: object;



}

