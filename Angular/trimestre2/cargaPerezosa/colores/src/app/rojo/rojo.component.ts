import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './rojo.component.html',
  styleUrls: ['./rojo.component.css'],
})
export class RojoComponent {
  colores = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'lightgreen',
  ];
  sizes = [8, 16, 24, 32, 40, 48, 56];

  personas = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Luis', edad: 30 },
    { id: 3, nombre: 'Sofia', edad: 28 },
    { id: 4, nombre: 'Miguel', edad: 35 },
  ];
  periodicos = [
    { nombre: 'El País', url: 'https://elpais.com' },
    { nombre: 'El Mundo', url: 'https://elmundo.es' },
    { nombre: 'ABC', url: 'https://abc.es' },
    { nombre: 'La Vanguardia', url: 'https://lavanguardia.com' },
    { nombre: 'El Diario', url: 'https://eldiario.es' },
  ];

  color = 'red';
  size = '16px';
  segundos = 10;
  estado = false;
  intervalo: NodeJS.Timeout | undefined;
  indiceHover: number | null = null;
  indiceHoverPeriodico: number | null = null;

  verNombrePeriodico() {
    this.indiceHoverPeriodico = null;
  }

  verNombrePersona() {
    this.indiceHover = null;
  }

  verEnlace(indice: number) {
    this.indiceHoverPeriodico = indice;
  }

  verEdad(indice: number) {
    this.indiceHover = indice;
  }

  cambiarEstilos() {
    this.estado = !this.estado;

    this.intervalo = setInterval(() => {
      this.color =
        this.colores[Math.floor(Math.random() * this.colores.length)];
      this.size = `${
        this.sizes[Math.floor(Math.random() * this.sizes.length)]
      }px`;
      this.segundos -= 1;

      if (this.segundos === 0) {
        clearInterval(this.intervalo);
        this.intervalo = undefined;
        this.estado = false;
        this.segundos = 10;
        this.color = 'red';
        this.size = '16px';
      }
    }, 1000);
  }
}
