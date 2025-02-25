import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModule } from './producto/producto.module';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private HttpCliente:HttpClient) {
  }
  leerProducto():Observable<ProductoModule[]>{

    return this.HttpCliente.get<ProductoModule[]>
    ('http://moralo.atwebpages.com/menuAjax/productos2/index.php')
  }
}
