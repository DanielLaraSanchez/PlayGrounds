import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../public/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _authService: AuthserviceService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    let username = target.querySelector('#username').value;
    let password = target.querySelector('#password').value;
    this._authService.getUserDetails(username, password)
    console.log(username, password)
    console.log(event);
  }

}
