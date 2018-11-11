import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginActionService {
onLoginCompleted = new EventEmitter();
  constructor() { }
}
