export class FrutaC {
  id: number = 0;
  nombre: string = '';
  precio: number = 0;
  unidades: number = 0;
  imagen: string = '';
  constructor(
    id: number,
    nombre: string,
    precio: number,
    unidades: number,
    imagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
    this.imagen = imagen;
  }
}
