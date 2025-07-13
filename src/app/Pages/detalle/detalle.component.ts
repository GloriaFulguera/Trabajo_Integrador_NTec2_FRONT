import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { SolicitudService } from '../../Services/solicitud.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  Titulo: any;
  Id: any;
  Dni = localStorage.getItem("user_dni");
  Nombre: any;
  Apellido: any;
  Edad: any;
  Ingresos: any;
  Empleo: any;
  Monto: any;
  Cuotas: any;
  Motivo: any;
  MotivoR: any;
  Riesgo: any;
  Estado: any;
  errorMessage: string = '';

  Usuario: any;
  DataSource: any;

  constructor(private service: SolicitudService, private route: ActivatedRoute, private loginService: LoginService, private routeL: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("user_state") === "true") {
      this.Cargar();
      this.GetUser();
      this.GetSolicitud();
    }
    else {
      this.routeL.navigate(['/lock']);
    }

  }
  Cargar() {
    this.route.queryParams.subscribe(x => {
      this.Titulo = x['titulo'];
      this.Id = x['id'];
    })
  }
  GetUser() {
    this.loginService.GetUser(this.Dni).subscribe(x => {
      this.Usuario = x;
      this.Nombre = this.Usuario[0].nombre;
      this.Apellido = this.Usuario[0].apellido;
    })
  }
  GetSolicitud() {
    this.service.GetSolicitud(this.Id).subscribe(x => {
      this.DataSource = x;
      console.log(this.DataSource);
      this.Edad = this.DataSource[0].usuario_edad;
      this.Ingresos = this.DataSource[0].ingresos;
      this.Empleo = this.DataSource[0].tipo_empleo;
      this.Monto = this.DataSource[0].monto;
      this.Cuotas = this.DataSource[0].cuotas;
      this.Motivo = this.DataSource[0].motivo;
      this.Riesgo = this.DataSource[0].riesgo;
      this.Estado = this.DataSource[0].estado;
      this.MotivoR = this.DataSource[0].motivo_rechazo_aprobacion;
    })
  }

  CambiarEstado(nuevoEstado:any){
    if (!this.MotivoR) {
      this.errorMessage = 'Por favor completá el campo Motivo de aprobacion / rechazo.';
      return;
    }
    this.errorMessage = '';

    let obj = {
      id: Number(this.Id),
      estado: nuevoEstado,
      motivo_rechazo: this.MotivoR
    }
    this.service.EditSolicitud(obj).subscribe(x => {
      if (x == false) {
        alert("Ocurrio un error.");
      }
      else {
        alert("La solicitud se modifico correctamente.");
        this.routeL.navigate(['home/historial']);
      }
    })
  }
}
