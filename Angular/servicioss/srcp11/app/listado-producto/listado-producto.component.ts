import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ProductoModule } from '../producto/producto.module';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent {
  ListaProductos!:ProductoModule[]
  constructor(private httpCliente:ServicioService){
    this.httpCliente.leerProducto().subscribe((producto:ProductoModule[])=>{
      this.ListaProductos= producto;
    })
  }
}
