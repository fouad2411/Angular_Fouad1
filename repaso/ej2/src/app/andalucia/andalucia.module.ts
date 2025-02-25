import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndaluciaRoutingModule } from './andalucia-routing.module';
import { HuelvaComponent } from './huelva/huelva.component';
import { SevillaComponent } from './sevilla/sevilla.component';
import { CadizComponent } from './cadiz/cadiz.component';
import { CaceresComponent } from '../extremadura/caceres/caceres.component';
import { BadajozComponent } from '../extremadura/badajoz/badajoz.component';


@NgModule({
  declarations: [
    HuelvaComponent,
    SevillaComponent,
    CadizComponent,
    CaceresComponent,
    BadajozComponent
  ],
  imports: [
    CommonModule,
    AndaluciaRoutingModule
  ]
})
export class AndaluciaModule { }
