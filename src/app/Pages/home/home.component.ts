import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Dni = localStorage.getItem("user_dni");
  Nombre: any;
  Apellido: any;
  Usuario: any;
  constructor(private route: Router, private loginService: LoginService) { }
  ngOnInit(): void {
    let logueado = localStorage.getItem("user_state");
    if (!logueado) {
      this.route.navigate(['/lock']);
    }
    else{
      this.GetUser();
    }
  }
  GetUser() {
    this.loginService.GetUser(this.Dni).subscribe(x => {
      this.Usuario = x;
      this.Nombre = this.Usuario[0].nombre;
      this.Apellido = this.Usuario[0].apellido;
    })
  }
}
