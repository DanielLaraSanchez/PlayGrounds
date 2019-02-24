
export class Week {


    // constructor(_id = '', workersRequired = 0, hours = 0, arrayOfWorkers = [], day: '', fullyBooked = false){
    //     this._id = _id;
    //     this.workersRequired = workersRequired;
    //     this.hours = hours;
    //     this.arrayOfWorkers = arrayOfWorkers;
    //     this.day = day;
    //     this.fullyBooked = fullyBooked;
    // }

    constructor(){}



    id: String;
    weekNumber: number;
    daysInWeek: Array<any>;
    month: String;
    year: String;
    isGenerated: Boolean;
    isSetupApplied: Boolean;
}

