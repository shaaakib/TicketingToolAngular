import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew/";

  constructor(private http: HttpClient) { }

  login(obj:any) {
    debugger;
    return this.http.post(this.apiUrl + "Login",obj);
  }

  getAllDept(){
    return this.http.get(`${this.apiUrl}GetDepartments`)
  }
  createNewDept(obj:any){
    return this.http.post(`${this.apiUrl}CreateDepartment`,obj)
  }
  updateDept(obj:any){
    return this.http.put(`${this.apiUrl}UpdateDepartment`,obj)
  }
  deleteDeptById(id : number){
    return this.http.delete(`${this.apiUrl}DeleteDepartment?id=${id}`)
  }
  
}
