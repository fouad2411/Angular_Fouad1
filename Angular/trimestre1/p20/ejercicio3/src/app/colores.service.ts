import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private httpCliente: HttpClient) {}
  rutaFichero="assets/colores.txt"

  listarColores(): Observable<string> {
    return this.httpCliente.get(this.rutaFichero, { responseType: 'text' });
    }
}
