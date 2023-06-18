import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PanelprincipalComponent } from './Components/panelprincipal/panelprincipal.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { RepositorioComponent } from './Components/repositorio/repositorio.component';
import { TablasComponent } from './Components/tablas/tablas.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

const routes: Routes = [
  {
    path:'inicio', component:InicioComponent
  },
  {
    path:'panel-principal', component:PanelprincipalComponent
  },
  {
    path:'reportes', component:ReportesComponent
  },
  {
    path:'repositorio', component:RepositorioComponent
  },
  {
    path:'usuarios', component:UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
