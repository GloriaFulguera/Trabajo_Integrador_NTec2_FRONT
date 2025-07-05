import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url="https://localhost:7298/api/solicitud/";
  constructor(private http:HttpClient) { }

  GetSolicitudes(){
    return this.http.get(this.url+"GetSolicitudes");
  }
}
