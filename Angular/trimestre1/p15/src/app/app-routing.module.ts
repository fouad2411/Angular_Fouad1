import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrecolComponent } from './brecol/brecol.component';
import { LombardaComponent } from './lombarda/lombarda.component';
import { RepolloComponent } from './repollo/repollo.component';
import { ColiflorComponent } from './coliflor/coliflor.component';

const routes: Routes = [
  {
    path:'brecol',
    component:BrecolComponent
  },
  {
    path:'lombarda',
    component:LombardaComponent
  },
  {
    path:'repollo',
    component:RepolloComponent
  },
  {
    path:'coliflor',
    component:ColiflorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
