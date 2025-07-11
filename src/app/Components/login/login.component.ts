import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  DataSource:any;
  usuario:any;
  clave:any;
  mensaje:any;

  constructor(private service:LoginService,private router:Router){}
  ngOnInit(): void {
    localStorage.removeItem("user_state");
    localStorage.removeItem("user_dni")
  }
  Login(){
    //OJO, este no funciona si usuario va en caracteres
    let obj={
      dni:this.usuario,
      clave:btoa(this.clave)
    }
    this.service.Login(obj).subscribe(x=>{
      this.DataSource=x;
      if(this.DataSource.result==true){
        localStorage.setItem("user_state","true");
        localStorage.setItem("user_dni",this.usuario);
        localStorage.setItem("rol",this.DataSource.rol);
        this.router.navigate(['home/']);
      }
      else{
        this.mensaje=this.DataSource.mensaje;
      }
    })
  }
  
}
