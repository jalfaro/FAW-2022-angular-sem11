import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
  {path:'', component: FormularioComponent},
  {path:'listado', component: ListadoComponent},
  {path:'detalle', component: PersonajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
