import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Precios } from './precios';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  procesarFrutas(bloqueFruta: string) {
  const frutas: Precios[] = [];
    const lineas = bloqueFruta.split('\n');

   for(let linea of lineas){
    const partes= linea.split(':');
    const nombre= partes[0]
    const precio= partes[1]
    frutas.push(new Precios(nombre,precio))
   // console.log(frutas)
   }
   return frutas

  }


  constructor(private httpCliente: HttpClient) {}

    obtenerPrecios(): Observable<string>
    {
    return this.httpCliente.get('assets/precios.txt', { responseType: 'text' });
    }


}
