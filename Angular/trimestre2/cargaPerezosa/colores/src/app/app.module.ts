import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AzulComponent } from './azul/azul.component';
import { RojoComponent } from './rojo/rojo.component';
import { VerdeComponent } from './verde/verde.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AzulComponent, RojoComponent, VerdeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
