import { Component, OnInit, ViewChild } from '@angular/core';
import { numeros } from '../numeros';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NumeroSService } from '../numero-s.service';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})
export class ListaNumerosComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<numeros>();
  @ViewChild(MatTable) tabla1!: MatTable<numeros>;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(public dialog: MatDialog,private servicio:NumeroSService){  }
  ngOnInit(): void {

    this.dataSource.data =  this.servicio.devolver()


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  columnas: string[] = [
    'id',
    'n1',
    'n2',
    'n3',
    'n4',
    'n5',
    'n6',
    'eliminar'
    ,'modificar'
  ];
  datos: numeros[] = []

modificar(n:numeros) {
  const dialogo1 = this.dialog.open(DialogoComponent, {
    data: new numeros(n.id, n.n1, n.n2,n.n3, n.n4,n.n5,n.n6),
  });
  dialogo1.afterClosed().subscribe((c)=>{
    if (c != undefined){
      //find devuelve el objeto si no undefined
      this.dataSource.data= this.servicio.actualizarTupla(c)
    }
  })
}
borrar(id: number) {
  this.dataSource.data=this.servicio.eliminarElemento(id)
  this.tabla1.renderRows();
}
abrirDialogo() {
  const dialogo = this.dialog.open(DialogoComponent,{
    data: new numeros(0,0,0,0,0,0,0),
  });
  dialogo.afterClosed().subscribe((c) => {
    if (c != undefined){

      this.dataSource.data= this.servicio.insertarElemento(c)
    }
  });

}}
