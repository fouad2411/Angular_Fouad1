import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlturasComponent } from './alturas/alturas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ProvinciasComponent } from './provincias/provincias.component';

// Define las rutas directamente
const routes: Routes = [
  {
    path: 'provincias',
    component: ProvinciasComponent,
  },
  {
    path: 'alturas',
    component: AlturasComponent,
  },
  {
    path: 'mensajes',
    component: MensajesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
