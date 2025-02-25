import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from './provincia';
import { HttpClient } from '@angular/common/http';
import { Altura } from './altura';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpcliente:HttpClient) { }
  leerProvincias():Observable<Provincia[]>{
    return this.httpcliente.get<Provincia[]>('http://localhost/serviciosCliente/listadoProvincias.php')
  }

  leerAlturas():Observable<Altura[]>{
    return this.httpcliente.get<Altura[]>('http://localhost/serviciosCliente/listadoAlturas.php')
  }
  leerMensaje():Observable<Mensaje[]>{
    return this.httpcliente.get<Mensaje[]>('http://localhost/serviciosAdmin/listadoTodosMensajes.php')
  }
}
