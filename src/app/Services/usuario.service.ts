import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url="https://localhost:7298/api/usuario/";
  constructor(private http:HttpClient) { }

  GetUsuarios(dni:any){
    return this.http.get(this.url+"GetUsuarios?dni="+dni);
  }

  EditUsuario(obj:any){
    return this.http.put(this.url+"EditUsuario",obj);
  }

  DeleteUsuario(dni:any){
    return this.http.delete(this.url+"DeleteUsuario?dni="+dni);
  }
}
