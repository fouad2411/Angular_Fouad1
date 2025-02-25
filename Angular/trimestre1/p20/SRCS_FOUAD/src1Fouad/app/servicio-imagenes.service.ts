import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagenes } from './imagenes';

@Injectable({
  providedIn: 'root'
})
export class ServicioImagenesService {
  constructor(private httpCliente: HttpClient) {}

  obtenerImagenes() {
    return this.httpCliente.get<Imagenes[]>('assets/getImagenes.json');

  }

}
