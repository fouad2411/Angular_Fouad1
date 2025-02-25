import { Component } from '@angular/core';
import { Altura } from '../altura';
import { Provincia } from '../provincia';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  listadoAlturas!:Altura[];
  alturaSeleccionada:Altura={
    nombre:"",
    situacionAltMax:"",
    alturaMaxima:"",
    situacionAltMin:"",
    alturaMinima:""
  }
  constructor(private servicio : ServicioService){
    this.servicio.leerAlturas().subscribe(x=>{this.listadoAlturas=x})
  }

}
