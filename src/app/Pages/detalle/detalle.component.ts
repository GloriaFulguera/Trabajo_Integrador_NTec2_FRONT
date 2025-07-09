import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  Titulo:any;
  Dni=localStorage.getItem("user_dni");
  Nombre:any;
  Apellido:any;
  Edad:any;
  Ingresos:any;
  Empleo:any;
  Monto:any;
  Cuotas:any;
  Motivo:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.Cargar();
  }
  Cargar(){
    this.route.queryParams.subscribe(x=>{
      this.Titulo=x['titulo']
    })
  }
}
