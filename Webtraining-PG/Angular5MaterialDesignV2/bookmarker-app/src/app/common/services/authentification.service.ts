import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  apiAuthBaseURL = 'http://projects-api.webtraining.zone';
  user;
  hasSession = false;


  constructor(public _http: HttpClient, 
              public _sessionStorage: SessionStorageService,
              public _router: Router) {   }

  public isLoggedIn(){
    const user = this._sessionStorage.retrieve('user');
    if(!!user){
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  
  public logIn( username: string, password: string){
    const url = `${this.apiAuthBaseURL}/users/login`;

    return this._http.post(url, {
      username: username,
      password: password
    });
  }


  public logOut(){
    this.user = null;
    this.hasSession = false;
    this._sessionStorage.clear('user')
    this._router.navigate(['/login']);

  }


}
