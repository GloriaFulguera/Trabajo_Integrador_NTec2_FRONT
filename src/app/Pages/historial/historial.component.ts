import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../Services/solicitud.service';

@Component({
  selector: 'app-historial',
  standalone: false,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{
  DataSource:any;
  constructor(private service:SolicitudService){}
  ngOnInit(): void {
    this.GetSolicitudes();
  }
  GetSolicitudes(){
    return this.service.GetSolicitudes().subscribe(x=>{
      this.DataSource=x;
    })
  }
}
