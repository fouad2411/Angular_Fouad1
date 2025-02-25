import { Component, ViewChild } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  constructor( private http: ProductoService) {}
  ngOnInit(): void {

    this.http.obtenerProductos().subscribe((data: Producto[]) => {
      this.datos = data;
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  datos: Producto[] = [];
  columnas: string[] = [
    'id',
    'name',
    'price',
    'photo',
    'activo',
    'stockActual',
    'stockMinimo'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Producto>();
  @ViewChild(MatTable) tabla1!: MatTable<Producto>;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
