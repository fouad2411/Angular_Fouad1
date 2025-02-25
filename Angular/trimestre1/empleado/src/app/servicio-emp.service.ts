import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpService {
  insertarEmpleado(emp: Empleado) {
    return this.HttpCliente.post<Empleado>(
      'http://moralo.atwebpages.com/ajaxListar/create_persona.php',
      emp
    );
  }
  eliminarEmpleado(id: Number) {
    return this.HttpCliente.delete<Empleado>(
      'http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' + id
    );
  }
  constructor(private HttpCliente: HttpClient) {}
  leerEmpleados() {
    return this.HttpCliente.get<Empleado[]>(
      'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php'
    );
  }
  modificarEmpleado(emp: Empleado) {
    return this.HttpCliente.put<Empleado>(
      ' http://moralo.atwebpages.com/ajaxListar/update_persona.php',
      emp
    );
  }
}
