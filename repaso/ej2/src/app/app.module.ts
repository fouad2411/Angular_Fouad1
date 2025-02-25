import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { ExtremaduraComponent  } from './extremadura/extremadura.component';


@NgModule({
  declarations: [
    AppComponent,
    AndaluciaComponent,
    ExtremaduraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
