import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';



const routes: Routes = [
  { path: '', redirectTo: 'HeaderComponent' , pathMatch: 'full' },
  { path: 'acerca-de', component: AcercaDeComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'habilidades', component: HabilidadesComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'login', component: LoginComponent },
  { path: 'carrusel', component: CarruselComponent }
]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
