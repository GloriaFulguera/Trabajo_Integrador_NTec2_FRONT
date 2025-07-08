import { Component } from '@angular/core';
import { SolicitudService } from '../../Services/solicitud.service';

@Component({
  selector: 'app-solicitudes',
  standalone: false,
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  constructor(private service:SolicitudService){}
}
