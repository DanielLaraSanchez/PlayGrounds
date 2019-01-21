import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public http: HttpClient) { }



  getUserDetails(username, password){
    //post these details to api server return user infor if correct
  }

}
