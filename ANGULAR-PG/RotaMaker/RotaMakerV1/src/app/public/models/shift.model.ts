import{Worker} from '../models/worker.model';





export class Shift{
    id: number;
    workersRequired: number;
    hours: number;
    arrayOfWorkers: Array<Worker>;
    day: string;
}