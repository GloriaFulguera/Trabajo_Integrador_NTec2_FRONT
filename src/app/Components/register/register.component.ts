import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Dni:any;
  Nombre:any;
  Apellido:any;
  Clave:any;
  RClave:any;
  mensaje:any;

  constructor(private service:LoginService){}

  Registrar(){
    if(this.Clave===this.RClave){
      let obj={
      dni:this.Dni,
      nombre:this.Nombre,
      apellido:this.Apellido,
      clave:btoa(this.Clave)
    }
    this.service.CreateUser(obj).subscribe(x=>{
      if(x==false){
        alert("Ocurrio un error al crear el usuario");
      }
      else{
        this.ClearInputs();
        alert("Usuario generado correctamente");
      }
    })
    }
    else{
      this.mensaje="Las contraseñas no coinciden";
    }
  }

  ClearInputs(){
    this.Dni="";
    this.Nombre="";
    this.Apellido="";
    this.Clave="";
    this.RClave="";
    this.mensaje="";
  }
}
