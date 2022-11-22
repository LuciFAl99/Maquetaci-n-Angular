import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';



const routes: Routes = [
   
  { path: 'acerca-de', component: AcercaDeComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'habilidades', component: HabilidadesComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {  path: '', redirectTo: 'home' , pathMatch: 'full'}
]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
