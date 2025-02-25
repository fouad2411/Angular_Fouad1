import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent {
  @Input() mensajeDeEntradaFrutal: string = '';

  @Output() mensajeDeSalidaFrutal = new EventEmitter();

  @Output() nplantones = new EventEmitter();

  mensajeParaHuerto: string = '';

  numerodePlantones: number = 0;

  constructor() {}

  ngOnInit() {}

  enviaMensaje() {
    this.mensajeDeSalidaFrutal.emit({ mensaje: this.mensajeParaHuerto });
  }

  enviarPlantones() {
    this.numerodePlantones = Math.round(Math.random() * 1000);
    this.nplantones.emit({plantones: this.numerodePlantones});
  }
}
