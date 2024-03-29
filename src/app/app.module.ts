import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CarruselComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    PieDePaginaComponent,
    LoginComponent,
    HomeComponent,
    

  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
