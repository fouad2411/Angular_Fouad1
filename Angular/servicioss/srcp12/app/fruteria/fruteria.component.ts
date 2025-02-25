import { Component } from '@angular/core';
import { ServFrutaService } from '../serv-fruta.service';
import { FrutaModule } from '../fruta/fruta.module';

@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {
resetearFormulario() {
}
  fruta!:FrutaModule;
  frutaSeleccionada:FrutaModule={
    id:0,
    nombre:"",
    precio:0,
    unidades:0,
    imagen:''
  }
  listaFrutas!:FrutaModule[];
  info!: string;

  constructor (private httpFruta:ServFrutaService){
    this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas =x)
  }
  seleccionarProductos(f: FrutaModule) {
    this.frutaSeleccionada=f;
  }

  eliminarFruta(fruta: FrutaModule) {
  this.httpFruta.eliminarFruta(fruta.id).subscribe((p:FrutaModule)=>{
    this.info= fruta.nombre + "eliminada con id: "+ fruta.id;
    this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas =x)

  })
  }

  AniadirProducto(form:{value:FrutaModule;}) {
    this.httpFruta.crearFruta(form.value).subscribe((p:FrutaModule)=> {this.fruta = p});
    this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas =x)

  }

  ActualizarProducto(form:{value:FrutaModule}) {
    form.value.id= this.frutaSeleccionada.id
    form.value.nombre= this.frutaSeleccionada.nombre
    form.value.precio= this.frutaSeleccionada.precio
    form.value.unidades= this.frutaSeleccionada.unidades
    form.value.imagen= this.frutaSeleccionada.imagen
    if(this.frutaSeleccionada && this.frutaSeleccionada.id){
      this.httpFruta.actualizarFruta(form.value).subscribe
      ((p:FrutaModule)=>{this.fruta= p})
      this.info= "Fruta modificada: "+form.value.nombre;
      this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas =x)

    }
  }
}
