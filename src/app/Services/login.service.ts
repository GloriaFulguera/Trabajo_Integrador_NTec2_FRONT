import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://localhost:7298/api/login/";
  constructor(private http:HttpClient) { }

  Login(obj:any){
    return this.http.post(this.url+"Login",obj);
  }
  GetUser(dni:any){
    return this.http.get(this.url+"GetUsuarios?dni="+dni);
  }
}
