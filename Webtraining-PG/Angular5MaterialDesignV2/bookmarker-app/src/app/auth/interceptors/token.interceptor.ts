import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { request } from 'https';
import { AuthentificationService } from 'src/app/common/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this._authService.user ?
    this._authService.user.api_token : '';
    
    request = request.clone({
      setHeaders:{
        'Api-Token': token,
        'Authorization': `User ${token}`,
        'X-Request-With': 'XMLHttpRequest'
      }
    })
    return next.handle(request);
  }

  constructor(public _authService: AuthentificationService) { }
}
