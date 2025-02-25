import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCochesComponent } from './listado-coches/listado-coches.component';
import { DialogoComponent } from './dialogo/dialogo.component';

const routes: Routes = [
  {
    path:'coches',
    component:ListadoCochesComponent
  },{
    path:'dialogo',
    component:DialogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
