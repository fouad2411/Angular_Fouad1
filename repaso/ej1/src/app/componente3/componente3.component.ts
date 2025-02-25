import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
listadoMensajes!:Mensaje[]

mensajeSeleccionado:Mensaje={
  id:"",
  usuario: "",
  fecha:"",
  mensaje:"",
  activo:"",
  destinatario:""
}
constructor(private servicio:ServicioService){
  this.servicio.leerMensaje().subscribe(x=>{this.listadoMensajes=x})
}
}
