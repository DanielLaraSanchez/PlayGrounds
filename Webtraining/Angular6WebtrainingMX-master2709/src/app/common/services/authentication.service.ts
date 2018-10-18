import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../config/api';
import { SessionStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  hasSession = false;
  user: any;



  constructor(public _http: HttpClient,
              public _sessionStorageService: SessionStorageService) { }


  public isLoggedIn(){
    const user = this._sessionStorageService.retrieve('user');

    if(!!user){
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public isLoggedOut(){
      this._sessionStorageService.clear()
      this.hasSession = false;

  }

  public login(email: string, password: string) {
   const url = `${API.AUTH_SERVICES_BASE_URL}auth/login`;

   return this._http.post(url, {
     'email': email,
     'password': password
   });
 }

}
