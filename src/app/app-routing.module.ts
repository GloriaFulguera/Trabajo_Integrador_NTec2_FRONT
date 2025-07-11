import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { HistorialComponent } from './Pages/historial/historial.component';
import { LoginComponent } from './Components/login/login.component';
import { ContainerComponent } from './Components/container/container.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { RegisterComponent } from './Components/register/register.component';
import { LockComponent } from './Components/lock/lock.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "lock", component: LockComponent },
  { path: "registro", component: RegisterComponent },
  {
    path: "home", component: ContainerComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "solicitud", component: SolicitudesComponent },
      { path: "historial", component: HistorialComponent },
      { path: "detalle", component: DetalleComponent },
      { path: "usuarios", component: UsuariosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
