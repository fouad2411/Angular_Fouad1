import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

actualizarNumeroPeticiones1(event: any) {
  this.peticionesHijo1=event.peticion1
}

  mensajeParaHijo1: string="";
  mensajeDeHijo1: string="";
  mensajeParaHijo2: string="";
  mensajeDeHijo2: string="";
peticionesHijo1: number=0;
peticionesHijo2: number=0;
peticionesDelPadre1:number=0;
  //recibir el valor mensaje que sale hijo1
  actualizarmensajeDehijo1(event:any) {
    this.mensajeDeHijo1= event.mensaje
  }
  actualizarMensajeDehijo2(event: any) {
  this.mensajeDeHijo2=event.mensaje
  }
  enviarPeticionesAlHijo1() {
    this.peticionesDelPadre1= Math.floor(Math.random()*1000)

    }
}
