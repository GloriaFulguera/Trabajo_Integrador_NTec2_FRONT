import { Component } from '@angular/core';

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


  Registrar(){}
}
