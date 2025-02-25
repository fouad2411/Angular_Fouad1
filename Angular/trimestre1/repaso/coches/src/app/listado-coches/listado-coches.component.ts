import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Coche } from '../coche';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit {
  constructor(public dialog: MatDialog, private httpCliente: HttpClient){  }
  columnas: string[] = [
    'id',
    'matricula',
    'color',
    'marca',
    'km',
    'eliminar'
    ,'modificar'
  ];
  datos: Coche[] = [
    new Coche(1,"1234ABC", "Rojo", "Toyota", "25000"),
    new Coche(2,"5678DEF", "Azul", "Ford", "32000"),
    new Coche(3,"9101GHI", "Negro", "BMW", "15000"),
    new Coche(4,"1213JKL", "Blanco", "Mercedes", "5000"),
    new Coche(5,"1415MNO", "Gris", "Audi", "18000"),
    new Coche(6,"1617PQR", "Verde", "Volkswagen", "45000"),
    new Coche(7,"1819STU", "Amarillo", "Chevrolet", "10000"),
    new Coche(8,"2021VWX", "Plateado", "Nissan", "8000"),
    new Coche(9,"2223YZA", "Marrón", "Renault", "30000"),
    new Coche(10,"2425BCD", "Púrpura", "Kia", "7000")
  ];

  coche!: Coche;
  dataSource = new MatTableDataSource<Coche>();
  @ViewChild(MatTable) tabla1!: MatTable<Coche>;

  ngOnInit(): void {
    this
    this.dataSource.data = this.datos; // Asignar datos a la tabla
  }

abrirDialogo() {
  const dialogo = this.dialog.open(DialogoComponent,{
    data: new Coche(0,"","","",""),
  });
  dialogo.afterClosed().subscribe((c) => {
    if (c != undefined) this.agregar(c);
  });
}
agregar(c:Coche){
  c.id = this.datos.length + 1;
  this.datos.push(new Coche(c.id, c.matricula, c.color,c.marca,c.km));
  this.dataSource.data = this.datos;
  this.tabla1.renderRows();
}
modificar(c: Coche) {
  const dialogo1 = this.dialog.open(DialogoComponent, {
    data: new Coche(c.id, c.matricula, c.color, c.marca, c.km),
  });
  //c representa el coche editado que
  dialogo1.afterClosed().subscribe((c)=>{
    if (c != undefined){
      //find devuelve el objeto si no undefined
      const coche = this.datos.find(f=>f.id == c.id)
       if(!coche){
        return
       }
       coche.matricula= c.matricula
       coche.color= c.color
       coche.marca= c.marca
       coche.km= c.km

       this.dataSource.data= this.datos
       this.tabla1.renderRows();
    }
  })
  }
borrar(id: Number) {

    if(confirm('Estas seguro de que quieres borrarlo')){
      //de esta forma actualizo el array con todos los coches que tengan un id distinto
      this.datos = this.datos.filter((coches) => coches.id !== id);
      this.dataSource.data= this.datos
      this.tabla1.renderRows();
      //de esta forma primero buscamos el coche por el id
      //si le encuentra se lo asigna a la cosnt si no retorna
      // y con el splice recuperançmos el indice y eliminamos el elemento
     /* const coche=this.datos.find(coches => coches.id === id)
      if(!coche){
        return
      }
      this.datos.splice(this.datos.indexOf(coche),1)
      this.dataSource.data= this.datos
      this.tabla1.renderRows();
*/
    }

}
  //no importante
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
