import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
  @Input() mensajeDeEntradaHortaliza: string = '';

  @Output() mensajeDeSalidaHortaliza = new EventEmitter();

  @Output() npSemillas = new EventEmitter();

  mensajeParaHuerto: string = '';

  numerodeSemillas: number = 0;

  constructor() {}

  ngOnInit() {}

  enviaMensajeH() {
    this.mensajeDeSalidaHortaliza.emit({ mensaje: this.mensajeParaHuerto });
  }

  enviarSemillas() {
    this.numerodeSemillas = Math.round(Math.random() * 1000);
    console.log(this.numerodeSemillas);
    this.npSemillas.emit({semilleros: this.numerodeSemillas });
  }
}
