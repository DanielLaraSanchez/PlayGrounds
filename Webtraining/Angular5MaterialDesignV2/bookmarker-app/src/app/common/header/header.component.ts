import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _router: Router, _sessionStorage: SessionStorageService,
                public _authentificationService: AuthentificationService    ) { }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();
    this._authentificationService.logOut();
    console.log('hello')
  }

}
