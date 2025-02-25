import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaceresRoutingModule } from './caceres-routing.module';
import { MoralejaComponent } from './moraleja/moraleja.component';
import { CoriaComponent } from './coria/coria.component';


@NgModule({
  declarations: [
    MoralejaComponent,
    CoriaComponent
  ],
  imports: [
    CommonModule,
    CaceresRoutingModule
  ]
})
export class CaceresModule { }
