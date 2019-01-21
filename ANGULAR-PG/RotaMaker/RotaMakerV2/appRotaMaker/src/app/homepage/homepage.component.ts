import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  loginOnClick(){
    this.router.navigate(['login'])
  }

  signupOnClick(){
    this.router.navigate(['signup'])
  }

  onClickDashboard(){
    this.router.navigate(['dashboard'])
  }

}
