import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicles: Array<Vehicle> = [];
  constructor(public _http: HttpClient, public _sessionStorageService: SessionStorageService ) { }

  getToken() : boolean {
    const user = this._sessionStorageService.retrieve('user');

    if(!!user && !!user.token){
      return user.token


  }
  return false;
}

createHeaderObject(token){
  return new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${token}`
  });
}

  getVehiclesByUsingToken() : Observable<Array<Vehicle>>{
    const apiVehiclesURL = `http://rentals-api.webtraining.fun/api/rentals/user`;
    const token = this.getToken();

    if(token){
      const headers = this.createHeaderObject(token);
      return this._http.get<Array<Vehicle>>(apiVehiclesURL, {headers: headers})
    }
  }

  getVehicles() : Observable<Array<Vehicle>> {
    const apiVehiclesURL = `http://rentals-api.webtraining.fun/api/vehicles`;
    return this._http.get<Array<Vehicle>>(apiVehiclesURL);
  }

  // getVehicleById(id: number): Vehicle {
  //   return this.vehicles.find(predicate:vehicle => vehicle.id === id);
  // }

}
