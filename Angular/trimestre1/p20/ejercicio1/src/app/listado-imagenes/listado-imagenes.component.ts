import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Imagenes } from '../imagenes';
import { ServicioImagenesService } from '../servicio-imagenes.service';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.css']
})
export class ListadoImagenesComponent implements OnInit{
  constructor( private http: ServicioImagenesService) {}

  ngOnInit(): void {

    this.http.obtenerImagenes().subscribe((data: Imagenes[]) => {
      this.datos = data;
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  datos: Imagenes[] = [];
  columnas: string[] = [
    'id',
    'imagen',
    'texto',
    'subtexto',
    'activo'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Imagenes>();
  @ViewChild(MatTable) tabla1!: MatTable<Imagenes>;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
