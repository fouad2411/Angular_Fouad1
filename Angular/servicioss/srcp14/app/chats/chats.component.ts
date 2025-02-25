import { Component } from '@angular/core';
import { Chat } from '../chat/chat.module';
import { NgForm } from '@angular/forms';
import { ServChatService } from '../serv-chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  listaMensajes!:Chat[];
  mensaje!:Chat;
  mensajeVacio!:Chat;
  mensajeSeleccionado:Chat={
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: ''
  }
  constructor(private servicio:ServChatService){}

  borrarMensaje(id: number) {
    this.servicio.servicioBorrarPorId(id).subscribe(x=>this.mensaje=x)
  }

  leerMensajes() {
    this.servicio.leerMensajes().subscribe(x=>this.listaMensajes=x)
  }

  insertarMensaje(form:{value:Chat}) {
    this.servicio.crearMensaje(form.value).subscribe((p:Chat)=> { this.mensaje = p  })
  }

  limpiarMensajes() {
    this.servicio.limpiarMensaje().subscribe(( p:Chat[] ) => {this.listaMensajes= p});
  }

}
