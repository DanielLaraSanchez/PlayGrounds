import { Component, EventEmitter, Input, Output,  OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;
  @Output() rentOneVehicle = new EventEmitter<Vehicle>();


  constructor() { }

  ngOnInit() {
  }

  rentVehicle(vehicle){
    this.rentOneVehicle.emit(vehicle);
  }

}
