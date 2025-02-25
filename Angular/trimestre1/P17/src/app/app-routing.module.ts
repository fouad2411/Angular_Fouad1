import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrecolComponent } from './brecol/brecol.component';
import { LombardaComponent } from './lombarda/lombarda.component';
import { RepolloComponent } from './repollo/repollo.component';
const routes: Routes = [
  { path: 'brecol', component: BrecolComponent },
  { path: 'lombarda', component: LombardaComponent },
  { path: 'repollo', component: RepolloComponent },
  { path: '', redirectTo: '/brecol', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
