import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../Services/solicitud.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-historial',
  standalone: false,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {
  DataSource: any;
  Dni = localStorage.getItem("user_dni");
  Estado: string = "";
  esAdmin = localStorage.getItem("rol") == "admin";

  constructor(private service: SolicitudService, private routeL: Router) { }
  ngOnInit(): void {

    if (localStorage.getItem("user_state") === "true") {
      this.GetSolicitudes(this.Dni)
    }
    else {
      this.routeL.navigate(['/lock']);
    }
  }
  GetSolicitudes(dni: any) {
    if (this.esAdmin) {
      return this.service.GetSolicitudesAdmin(dni, '').subscribe(x => {
        this.DataSource = x;
      })
    }
    else {
      return this.service.GetSolicitudesByDni(dni).subscribe(x => {
        this.DataSource = x;
      })
    }
  }

  GetSolicitudesByEstado() {
    if (this.esAdmin) {
      return this.service.GetSolicitudesAdmin(Number(this.Dni), this.Estado).subscribe(x => {
        this.DataSource = x;
      })
    }
    else {
      return this.service.GetSolicitudesByEstado(Number(this.Dni), this.Estado).subscribe(x => {
        this.DataSource = x;
      })
    }
  }

  Exportar_Excel(){
    const elementTable=document.getElementById('tblSolicitudes');
    const hoja:XLSX.WorkSheet=XLSX.utils.table_to_sheet(elementTable);
    const libro:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro,hoja,'datos');
    XLSX.writeFile(libro,'Solicitudes.xlsx');
  }
}
