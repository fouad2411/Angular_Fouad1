import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductoModule {

  id!:string;
  nombre!:string;
  precio!:string;
  unidades!:string;
  imagen!:string;
 }
