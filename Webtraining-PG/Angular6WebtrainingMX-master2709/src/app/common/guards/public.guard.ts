import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(public _authService: AuthenticationService,
              public _router: Router){}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!this._authService.isLoggedIn()){
        return true;


      }
      console.log('You are logged in!');
      this._router.navigate(['/auth-home']);
      
      return false;


  }
}
