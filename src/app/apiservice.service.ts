import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:5000/api/v1/users';
  
  getAllUsers() : Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }
  
  getUser(userId:any) : Observable<any>{
    return this._http.get(`${this.apiUrl}/${userId}`);
  }

  createUser(data:any) : Observable<any>{
    return this._http.post(`${this.apiUrl}`,data);
  }

  deleteUser(userId:any) : Observable<any>{
    return this._http.delete(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId:any,data:any) : Observable<any>{
    return this._http.put(`${this.apiUrl}/${userId}`,data);
  }

}
