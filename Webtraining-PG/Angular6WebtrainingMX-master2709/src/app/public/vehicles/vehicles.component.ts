import { Component, OnInit } from '@angular/core';
import { Vehicle } from './models/vehicle.model';
// import { Manufacturer } from './models/manufacturer.model';
import {VehiclesService} from './services/vehicles.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

vehicles : Array<Vehicle>

  constructor(public _vehiclesService: VehiclesService) { }


 ngOnInit() {
   this._vehiclesService.getVehicles().subscribe(
     vehicles => this.vehicles = vehicles,
     error => console.error(error)
   );
 }

 getarray(){
   return console.log(hello);
 }


}


let hello = "holaaaaaaaaa cabron";
