import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  DataSource: any;
  Usuario: any;
  Dni: any;
  Nombre: any;
  Apellido: any;
  Rol: any;
  Estado: any;

  constructor(private service: UsuarioService, private routeL: Router, private loginService: LoginService) { }
  ngOnInit(): void {
    if (localStorage.getItem("user_state") === "true") {
      this.Dni = localStorage.getItem("user_dni");
      this.GetUsuarios();
    }
    else {
      this.routeL.navigate(['/lock']);
    }
  }

  GetUsuarios() {
    return this.service.GetUsuarios(this.Dni).subscribe(x => {
      this.DataSource = x;
    })
  }

  CambiarRol(userDni:any){
    let obj;
    this.loginService.GetUser(userDni).subscribe(x => {
      this.Usuario = x;
      console.log(this.Usuario);
      let uRol = this.Usuario[0].rol == "1" ? "2" : "1";
      obj = {
        dni: userDni,
        nombre: this.Usuario[0].nombre,
        apellido: this.Usuario[0].apellido,
        rol: uRol,
        estado: this.Usuario[0].estado
      }
      this.service.EditUsuario(obj).subscribe(x => {
        if (x == false) {
          alert("No se pudo cambiar el  del usuario seleccionado.")
        }
        else {
          location.reload();
        }
      })

    })
  }
  /*GetUsuario(userDni:any){
    return this.loginService.GetUser(userDni).subscribe(x=>{
      this.Usuario=x;
      this.Nombre=this.Usuario[0].nombre;
      this.Apellido=this.Usuario[0].apellido;
      this.Rol=this.Usuario[0].rol;
      this.Estado=this.Usuario[0].estado;
    })
  }*/

  CambiarEstado(userDni: any) {
    let obj;
    this.loginService.GetUser(userDni).subscribe(x => {
      this.Usuario = x;
      let uEstado = this.Usuario[0].estado == "I" ? "A" : "I";
      obj = {
        dni: userDni,
        nombre: this.Usuario[0].nombre,
        apellido: this.Usuario[0].apellido,
        rol: this.Usuario[0].rol,
        estado: uEstado
      }
      this.service.EditUsuario(obj).subscribe(x => {
        if (x == false) {
          alert("No se pudo cambiar el estado del usuario seleccionado.")
        }
        else {
          location.reload();
        }
      })

    })
  }
}
