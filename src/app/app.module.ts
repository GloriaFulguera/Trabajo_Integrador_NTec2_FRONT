import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContainerComponent } from './Components/container/container.component';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { HistorialComponent } from './Pages/historial/historial.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    SolicitudesComponent,
    HistorialComponent,
    LoginComponent,
    HomeComponent,
    DetalleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
