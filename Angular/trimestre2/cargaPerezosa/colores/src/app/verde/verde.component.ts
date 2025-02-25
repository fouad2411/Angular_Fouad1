import { Component } from '@angular/core';

@Component({
  selector: 'app-verde',
  templateUrl: './verde.component.html',
  styleUrls: ['./verde.component.css'],
})
export class VerdeComponent {
  euros: number = 0.93;
  dolares: number = 1.06;
  yenes: number = 164.25;

  limpiar() {
    this.euros = 0.93;
    this.dolares = 1.06;
    this.yenes = 164.25;
  }

  calcular(moneda: string) {
    // Valores originales para los cálculos
    const eurosOriginal = this.euros;
    const dolaresOriginal = this.dolares;
    const yenesOriginal = this.yenes;

    if (moneda === 'euros') {
      this.dolares = parseFloat((eurosOriginal * 1.06).toFixed(2)); // Tipo de cambio para dólares
      this.yenes = parseFloat((eurosOriginal * 164.25).toFixed(2)); // Tipo de cambio para yenes
    } else if (moneda === 'dolares') {
      this.euros = parseFloat((dolaresOriginal * 0.93).toFixed(2)); // Tipo de cambio para euros
      this.yenes = parseFloat((dolaresOriginal * 164.25).toFixed(2)); // Tipo de cambio para yenes
    } else if (moneda === 'yenes') {
      this.euros = parseFloat((yenesOriginal * 0.93).toFixed(2)); // Tipo de cambio para euros
      this.dolares = parseFloat((yenesOriginal * 1.06).toFixed(2)); // Tipo de cambio para dólares
    }
  }
}
