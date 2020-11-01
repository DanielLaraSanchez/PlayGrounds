import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ServicetestService } from '../services/servicetest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _router: Router, _servicetest: ServicetestService) { }

  ngOnInit() {

    $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.bottom = "0";
      } else {
        document.getElementById("navbar").style.bottom = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }


  }

  onClick(route) {
    this._router.navigate([route])
  }

}
