import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Chat } from './chat/chat.module';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServChatService {



  limpiarMensaje() {
      return this.httpClient.delete<Chat[]>('http://moralo.atwebpages.com/menuAjax/chat/truncate.php')
    }
    servicioBorrarPorId(id: number) {
     return this.httpClient.delete<Chat>('http://daw2025.atwebpages.com/chat/BajaMensaje.php/?id='+id)
    }

  constructor(private httpClient:HttpClient, @Inject(LOCALE_ID) private locale:string) {}

  leerMensajes():Observable<Chat[]>{
    return this.httpClient.get<Chat[]>('http://daw2025.atwebpages.com/chat/ObtenerMensajes.php');
  }
  crearMensaje(mensaje: Chat): Observable<Chat> {
    mensaje.fecha= formatDate(Date.now(), 'HH:mm:ss/dd-MM-yy',this.locale);
    return this.httpClient.post<Chat>('http://daw2025.atwebpages.com/chat/AltaMensaje.php',mensaje)

  }
}
