import { Component } from '@angular/core';
import { Provincia } from '../provincia';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  listadoProvincia!:Provincia[]
  provinciaSeleccionada: Provincia = {
    nombreProvincia: "",
    votosPA: "",
    votosPB: "",
    votosPC: "",
    votosPD: "",
    Representantes: ""
  };
  constructor(private servicio:ServicioService){
    this.servicio.leerProvincias().subscribe(x=>{this.listadoProvincia=x})
  }
}
