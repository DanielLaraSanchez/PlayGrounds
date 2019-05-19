import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  readonly URL_API  = 'http://localhost:3000/api/roles/';


  selectedRole: Role;
  roles;

  constructor(public _http: HttpClient) {
    this.selectedRole = new Role();
   }



  getRoles(){
    return this._http.get(this.URL_API);
  }

  getRole(id){
    return this._http.get(this.URL_API, id)
  }

  createRole(role: Role){
    return this._http.post(this.URL_API, role)
  }

  updateRole(role: Role){
    return this._http.put(this.URL_API + `${role._id}`, role);
  }

  deleteRole(id: String){
    console.log(id)
    return this._http.delete(this.URL_API + `${id}`)
  }
}
