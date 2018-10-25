import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookmarksResponse } from '../models/bookmarks-response.model'

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  apiURL; 

  constructor(public _http: HttpClient) { 
    this.apiURL = 'http://bookmarks-api-cakephp.webtraining.zone';
  }


  getAll(): Observable<BookmarksResponse>{
    
    const url = `${this.apiURL}/bookmarks.json`;
    return this._http.get<BookmarksResponse>(url)
  }

}
