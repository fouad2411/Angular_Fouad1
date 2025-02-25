import { Component } from '@angular/core';
import { ListadosServiceService } from '../listados-service.service';
import { Mensajes } from '../mensajes';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  mensajes: Mensajes[] = [];

  constructor(private servicio: ListadosServiceService) {}

  ngOnInit() {
    this.servicio.leerMensjaes().subscribe((data: Mensajes[]) => {
      this.mensajes = data;
    });
  }
}
