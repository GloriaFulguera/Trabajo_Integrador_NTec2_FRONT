import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { HistorialComponent } from './Pages/historial/historial.component';
import { LoginComponent } from './Components/login/login.component';
import { ContainerComponent } from './Components/container/container.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "home", component: ContainerComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "solicitud", component: SolicitudesComponent },
      { path: "historial", component: HistorialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
