import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../Services/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: false,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {
  DataSource: any;

  constructor(private service: SolicitudService, private routeL: Router) { }
  ngOnInit(): void {

    if (localStorage.getItem("user_state") === "true") {
      this.GetSolicitudes();
    }
    else {
      this.routeL.navigate(['/lock']);
    }
  }
  GetSolicitudes() {
    return this.service.GetSolicitudes().subscribe(x => {
      this.DataSource = x;
    })
  }
}
