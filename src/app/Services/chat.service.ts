import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url="https://localhost:7216/api/chat";
  constructor(private http:HttpClient) { }

  EnviarMensaje(mensaje:any){
    return this.http.post(this.url,mensaje);
  }
}
