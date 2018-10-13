import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";// First you need to import Observable
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get('https://restcountries.eu/rest/v2/all')

  }
}
