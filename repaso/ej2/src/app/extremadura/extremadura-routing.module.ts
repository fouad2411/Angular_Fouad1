import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadajozComponent } from './badajoz/badajoz.component';
import { CaceresComponent } from './caceres/caceres.component';

const routes: Routes = [
  {
    path: 'caceres',
    component: CaceresComponent,
    loadChildren:()=>import('./caceres/caceres.module').then(m=>m.CaceresModule)
  },
  {
    path: 'badajoz',
    component: BadajozComponent,
    loadChildren:()=>import('./badajoz/badajoz.module').then(m=>m.BadajozModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtremaduraRoutingModule { }
