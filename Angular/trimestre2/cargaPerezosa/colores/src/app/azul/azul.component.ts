import { Component } from '@angular/core';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.component.html',
  styleUrls: ['./azul.component.css'],
})
export class AzulComponent {
  title = 'Calculadora';
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

  restar() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    this.resultado = this.num1 / this.num2;
  }
}
