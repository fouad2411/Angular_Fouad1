import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto2RoutingModule } from './proyecto2-routing.module';
import { Proyecto2Component } from './proyecto2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [Proyecto2Component,FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    Proyecto2RoutingModule,



  ]
})
export class Proyecto2Module { }
