import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url = "https://localhost:7298/api/solicitud/";
  constructor(private http: HttpClient) { }

  GetSolicitudesAdmin(dni: number, estado: string) {
    if (estado == '') {
      return this.http.get(this.url + "GetSolicitudesAdmin?dni=" + dni);
    }
    else {
      return this.http.get(this.url + "GetSolicitudesAdmin?dni=" + dni + "&estado=" + estado);
    }
  }
  CreateSolicitud(solicitud: any) {
    return this.http.post(this.url + "CreateSolicitud", solicitud);
  }
  GetSolicitud(id: any) {
    return this.http.get(this.url + "GetSolicitudes?id=" + id);
  }
  EditSolicitud(obj: any) {
    return this.http.put(this.url + "EditSolicitud", obj);
  }
  GetSolicitudesByDni(dni: any) {
    return this.http.get(this.url + "GetSolicitudes?dni=" + dni);
  }
  GetSolicitudesByEstado(dni: number, estado: any) {
    return this.http.get(this.url + "GetSolicitudes?dni=" + dni + "&estado=" + estado);
  }
}
