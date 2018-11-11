import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../common/header/header.component';
import { AfterLoginActionService } from '../../../common/services/after-login-action.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = {
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda'
  };

  constructor(public _authentificationService: AuthenticationService,
              public _sessionStorageService: SessionStorageService,
              public _router: Router,
              public headerComponent: HeaderComponent,
              public _afterLoginService: AfterLoginActionService) { }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();

    console.log('>>send POST request with form')
    this._authentificationService.login(this.user.email, this.user.password).subscribe(
      (data) =>{
        console.log(data)
        this._authentificationService.user = data;
        this._authentificationService.hasSession = true;
        this._sessionStorageService.store('user', data);
        this._afterLoginService.onLoginCompleted.emit('Done');
        this._router.navigate(['/auth-home']);
      },
      error => {
          console.log(error);
          this._authentificationService.hasSession = false;
        },
        () => {

        }

    )
  }
}
