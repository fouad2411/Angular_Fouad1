import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private httpCliente: HttpClient) {}
  obtenerProductos() {

    return this.httpCliente.get<Producto[]>('assets/getProductos.json');

  }


}
