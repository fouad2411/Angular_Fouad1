import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrutaC } from './fruta-c';

@Injectable({
  providedIn: 'root',
})
export class FrutaService {
  modificarFruta(f: FrutaC) {
    return this.HttpCliente.put<FrutaC>(
      'http://moralo.atwebpages.com/menuAjax/productos2/update_product.php ',
      f
    );
  }
  insertarEmpleado(f: FrutaC) {
    return this.HttpCliente.post<FrutaC>(
      'http://moralo.atwebpages.com/menuAjax/productos2/create_product.php ',
      f
    );
  }
  constructor(private HttpCliente: HttpClient) {}
  leerFrutas() {
    return this.HttpCliente.get<FrutaC[]>(
      'http://moralo.atwebpages.com/menuAjax/productos2/index.php '
    );
  }
  borrarFruta(id: Number) {
    return this.HttpCliente.delete<FrutaC>(
      'http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id=' +
        id
    );
  }
}
