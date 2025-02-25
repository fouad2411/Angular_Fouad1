import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrutaModule } from './fruta/fruta.module';

@Injectable({
  providedIn: 'root'
})
export class ServFrutaService {
  constructor(private httpClient:HttpClient) {}

//create
  crearFruta(fruta: FrutaModule):Observable<FrutaModule> {
    //con el post hacemos el insert
    return this.httpClient.post<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php',fruta)
  }
  //delete
  eliminarFruta(id: number) {
  return this.httpClient.delete<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id)
  }
  //update
  actualizarFruta(fruta: FrutaModule) {
    //actualizar fruta con el put
  return this.httpClient.put<FrutaModule>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php',fruta)
  }
//read
    leerFrutas():Observable<FrutaModule[]>{
      //utilizamos get porque vamos a leer y retorna un array porque puede ser uno o muchos
      return this.httpClient.get<FrutaModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
    }
   }

