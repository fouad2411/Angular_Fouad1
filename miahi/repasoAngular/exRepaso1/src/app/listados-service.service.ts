import { Injectable } from '@angular/core';
import { Provincias } from './provincias';
import { HttpClient } from '@angular/common/http';
import { Alturas } from './alturas';
import { Mensajes } from './mensajes';

@Injectable({
  providedIn: 'root',
})
export class ListadosServiceService {
  constructor(private http: HttpClient) {}
  leerProvincias() {
    return this.http.get<Provincias[]>(
      'http://localhost/serviciosCliente/listadoProvincias.php'
    );
  }

  leerAlturas() {
    return this.http.get<Alturas[]>(
      'http://localhost/serviciosCliente/listadoAlturas.php'
    );
  }


  leerMensjaes() {
    return this.http.get<Mensajes[]>(
      'http://localhost/serviciosAdmin/listadoTodosMensajes.php'
    );
  }
}
