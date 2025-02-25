import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Precios } from '../precios';
import {PreciosService} from '../precios.service'
@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements OnInit{
  constructor( private http: PreciosService ) {}

  ngOnInit(): void {

    this.http.obtenerPrecios().subscribe((data)=>{
      this.datos = this.http.procesarFrutas(data);
      //console.log(this.datos)
      this.dataSource.data = this.datos;
      console.log(this.dataSource.data)
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  datos: Precios[] = [];
  dataSource = new MatTableDataSource<Precios>();

  columnas: string[] = [
    'fruta',
    'precio',

  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<Precios>;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
