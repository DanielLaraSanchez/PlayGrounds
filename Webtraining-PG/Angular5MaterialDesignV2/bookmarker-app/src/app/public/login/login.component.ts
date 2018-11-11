import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthentificationService } from '../../common/services/authentification.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);


  constructor(public _authService: AuthentificationService,
              public _sessionStorage: SessionStorageService,
              public _router: Router) { }

  getErrorMessageForUsername() {
    const hasError = this.username.hasError('required')
    return hasError? 'Nombre de usuario es requerido': '';

  }

  getErrorMessageForPassword() {
    const hasError = this.password.hasError('required')
    return hasError? 'Nombre de usuario es requerido': '';

  }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();
    this._authService.logIn(this.username.value, this.password.value)
    .subscribe((data) =>{
      this._authService.user = data;
      this._sessionStorage.store('user', data);
      this._router.navigate(['/home']);
    }, (error: HttpErrorResponse)=>{
      if(error.status === 406){
        console.error('Unable to login')
      }
      console.error(error);
        this._authService.hasSession = false;
     
    })
  }

}
