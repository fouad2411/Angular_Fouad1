import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

const routes: Routes = [
  {
    path:"componente1",
    component:Componente1Component
  },
  {
    path:"componente2",
    component:Componente2Component
  },
  {
    path:"componente3",
    component:Componente3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
