import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { HistorialComponent } from './Pages/historial/historial.component';

const routes: Routes = [
  {path:"solicitud",component:SolicitudesComponent},
  {path:"historial",component:HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
