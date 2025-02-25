import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { MenuComponent } from './menu/menu.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Proyecto3Component } from './proyecto3/proyecto3.component';
import { Proyecto4Component } from './proyecto4/proyecto4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Proyecto1Component,
    MenuComponent,
    Proyecto3Component,
    Proyecto4Component,
    //Proyecto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
