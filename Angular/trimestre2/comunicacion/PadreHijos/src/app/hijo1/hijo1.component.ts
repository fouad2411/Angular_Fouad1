import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  @Input()
  mensajeDeEntradaParaHijo1: string="";
  @Input()
  peticionesDeEntradaHijo1:number=0

  numeroDePeticiones:number=0;
  //para los mensajes de salida
  @Output()
  mensajeDeSalidaPadreHijo1= new EventEmitter();
  @Output()
  nPeticiones= new EventEmitter();
  mensajeDeHijo1ParaPadre: string="";
  enviarMensaje() {
    this.mensajeDeSalidaPadreHijo1.emit({mensaje:this.mensajeDeHijo1ParaPadre})
  }
  enviarPeticionesUno() {
  this.numeroDePeticiones= Math.floor(Math.random()*1000)
    this.nPeticiones.emit({peticion1:this.numeroDePeticiones})
  }
}
