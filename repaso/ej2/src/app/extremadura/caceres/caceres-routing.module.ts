import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoriaComponent } from './coria/coria.component';
import { MoralejaComponent } from './moraleja/moraleja.component';

const routes: Routes = [
  {
    path:'moraleja',
    component:MoralejaComponent

  },
  {
    path:'coria',
    component:CoriaComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaceresRoutingModule { }
