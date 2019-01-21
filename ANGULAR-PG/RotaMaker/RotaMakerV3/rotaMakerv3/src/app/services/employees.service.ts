import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  readonly URL_API  = 'http://localhost:3000/api/employees/';


  selectedEmployee: Employee;
  employees: Employee[];


  constructor(private _http: HttpClient) {
    this.selectedEmployee = new Employee();
   }


  getEmployees(){
    return this._http.get(this.URL_API);
  }

  createEmployee(Employee: Employee){
    return this._http.post(this.URL_API, Employee)
  }

  updateEmployee(employee: Employee){
    return this._http.put(this.URL_API + `${employee._id}`, employee);
  }

  deleteEmployee(id: String){
    return this._http.delete(this.URL_API + `${id}`)
  }




}
