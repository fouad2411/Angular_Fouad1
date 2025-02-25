import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistroSService {
  constructor(private http: HttpClient) {}

  insertarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'http://localhost/serviciosCliente/insertarUsuario.php',
      usuario
    );
  }

  obtenerUsuarios() {
    return this.http.get<Usuario[]>(
      'http://localhost/serviciosCliente/listadoUsuarios.php'
    );
  }
}
