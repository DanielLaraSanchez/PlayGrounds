import { Employee } from "./employee";

export class Shift {


    // constructor(_id = '', workersRequired = 0, hours = 0, arrayOfWorkers = [], day: '', fullyBooked = false){
    //     this._id = _id;
    //     this.workersRequired = workersRequired;
    //     this.hours = hours;
    //     this.arrayOfWorkers = arrayOfWorkers;
    //     this.day = day;
    //     this.fullyBooked = fullyBooked;
    // }

    constructor(){}



    _id: String;
    workersRequired: number;
    hours: number;
    timeStart: string;
    timeFinish: string;
    arrayOfWorkers: Employee[];
    day: String;
    fullyBooked: Boolean;
    date: object;
    role: String;
}