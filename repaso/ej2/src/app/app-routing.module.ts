import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { ExtremaduraComponent } from './extremadura/extremadura.component';

const routes: Routes = [
  {path:"andalucia",
component:AndaluciaComponent,
loadChildren:()=>import('./andalucia/andalucia.module').then(m=>m.AndaluciaModule)},
{path:"extremadura",
component:ExtremaduraComponent,
loadChildren:()=>import('./extremadura/extremadura.module').then(m=>m.ExtremaduraModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
