import{Employee} from './employee.model';





export class Shift{
    id: number;
    workersRequired: number;
    hours: number;
    arrayOfWorkers: Array<Employee>;
    day: string;
    fullyBooked: boolean;
}