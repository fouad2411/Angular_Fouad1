import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
enviarMensaje() {
  this.mensajeDeSalidaPadreHijo1.emit({mensaje:this.mensajeDeHijo2ParaPadre})
}
  @Input()
  mensajeDeEntradaHijo2: string="";
  //para los mensajes de salida
  @Output()
  mensajeDeSalidaPadreHijo1= new EventEmitter();
  mensajeDeHijo2ParaPadre: string="";

}
