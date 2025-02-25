import { Component, OnInit, ViewChild } from '@angular/core';
import { FrutaC } from '../fruta-c';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { FrutaService } from '../fruta.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-listado-fruta',
  standalone: false,

  templateUrl: './listado-fruta.component.html',
  styleUrl: './listado-fruta.component.css',
})
export class ListadoFrutaComponent implements OnInit {
  columnas: string[] = [
    'id',

    'nombre',
    'precio',
    'unidades',
    'imagen',
    'eliminar',
    'modificar',
  ];
  datos: FrutaC[] = [];
  fruta!: FrutaC;

  dataSource = new MatTableDataSource<FrutaC>();
  //Representa lo que ees la tabla
  @ViewChild(MatTable) tabla1!: MatTable<FrutaC>;

  constructor(public dialog: MatDialog, private HttpCliente: FrutaService) {}
  ngOnInit(): void {
    this.HttpCliente.leerFrutas().subscribe((x) => {
      this.dataSource.data = x; // Asignar datos a la tabla
      this.datos = x;
    });
  }

  // Usar ngAfterViewInit para asegurar la inicialización de @ViewChild
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  borrar(id: Number) {
    this.HttpCliente.borrarFruta(id).subscribe((x: FrutaC) => {
      if (confirm('Realmente quiere borrarlo?')) {
        this.fruta = x;
        this.tabla1.renderRows();
      }
    });
  }
  //agregar y dialogo van juntos
  abrirDialogo() {
    const dialogo = this.dialog.open(DialogoComponent, {
      data: new FrutaC(0, '', 0, 0, ''),
    });
    dialogo.afterClosed().subscribe((emp) => {
      if (emp != undefined) this.agregar(emp);
    });
  }
  agregar(f: FrutaC) {
    //meter en el array
    this.datos.push(new FrutaC(f.id, f.nombre, f.precio, f.unidades, f.imagen));
    //agregar a la tabla
    this.HttpCliente.insertarEmpleado(f).subscribe((resultado) => this.fruta);
  }
  modificar(f: FrutaC) {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new FrutaC(f.id, f.nombre, f.precio, f.unidades, f.imagen),
    });
    dialogo1.afterClosed().subscribe((f) => {
      if (f != undefined) {
        this.HttpCliente.modificarFruta(f).subscribe((resultado) => this.fruta);
      }
    });
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
}
