import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../Services/solicitud.service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: false,
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {
  Dni = localStorage.getItem("user_dni");
  Nombre: any;
  Apellido: any;
  Edad: any;
  Ingresos: any;
  Empleo: any;
  Monto: any;
  Cuotas: any;
  Motivo: any;
  DataSource: any;
  errorMessage: string = '';

  constructor(private service: SolicitudService, private loginService: LoginService, private routeL: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("user_state") === "true") {
      this.GetUser();
    }
    else {
      this.routeL.navigate(['/lock']);
    }
  }

  GetUser() {
    this.loginService.GetUser(this.Dni).subscribe(x => {
      this.DataSource = x;
      console.log(this.DataSource);
      console.log(typeof (this.DataSource))
      this.Nombre = this.DataSource[0].nombre;
      this.Apellido = this.DataSource[0].apellido;
    })
  }
  CreateSolicitud() {

    if (!this.Edad || !this.Ingresos || !this.Empleo ||
        !this.Monto || !this.Cuotas || !this.Motivo) {
      this.errorMessage = 'Por favor completa todos los campos marcados con (*).';
      return;
    }
    this.errorMessage = '';

    let solicitud = {
      dni: Number(this.Dni),
      edad: this.Edad,
      ingresos: this.Ingresos.toString(),
      tipo_empleo: this.Empleo,
      monto: this.Monto.toString(),
      cuotas: Number(this.Cuotas),
      motivo: this.Motivo
    }
    console.log(solicitud);
    this.service.CreateSolicitud(solicitud).subscribe(x => {
      console.log("entro al create");
      if (x == false) {
        alert("No se pudo crear la solicitud, valide la información ingresada");
      }
      else {
        alert("La solicitud se cargó correctamente.")
        this.ClearInput();
      }
    })
  }
  ClearInput() {
    this.Edad = "";
    this.Ingresos = "";
    this.Empleo = "";
    this.Monto = "";
    this.Cuotas = "";
    this.Motivo = "";
  }
}
