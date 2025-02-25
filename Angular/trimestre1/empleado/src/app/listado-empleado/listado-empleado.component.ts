import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../empleado';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioEmpService } from '../servicio-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-listado-empleado',
  standalone: false,

  templateUrl: './listado-empleado.component.html',
  styleUrl: './listado-empleado.component.css',
})
export class ListadoEmpleadoComponent implements OnInit {
  //esto es para aplicar el filtro
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //las columnas de
  columnas: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'eliminar',
    'modificar',
  ];
  //array de datos
  datos: Empleado[] = [];
  //instancia de empleado
  empleado!: Empleado;
  @ViewChild(MatTable) tabla1!: MatTable<Empleado>;
  dataSource = new MatTableDataSource<Empleado>();
  //ordena y pagina
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private httpCliente: ServicioEmpService
  ) {}
  //inicializamos los datos de la tabla
  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x) => {
      this.dataSource.data = x;
      this.datos = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  //asi se borra de la tabla
  borrar(id: Number) {
    this.httpCliente.eliminarEmpleado(id).subscribe((x: Empleado) => {
      this.empleado = x;
      this.tabla1.renderRows();
    });
  }

  openDialog() {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Empleado(0, '', '', '', 0, ''),
    });

    dialogo1.afterClosed().subscribe((emp) => {
      if (emp != undefined) this.agregar(emp);
    });
  }
  agregar(emp: Empleado) {
    //agregar a la lista
    this.datos.push(
      new Empleado(
        emp.id,
        emp.nombre,
        emp.direccion,
        emp.cargo,
        emp.edad,
        emp.imagen
      )
    );
    //agregar a la tabla
    this.httpCliente
      .insertarEmpleado(emp)
      .subscribe((resultado) => this.empleado);
    //renderizar la vista
    this.tabla1.renderRows();
  }
  modificar(empleado: Empleado) {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Empleado(
        empleado.id,
        empleado.nombre,
        empleado.direccion,
        empleado.cargo,
        empleado.edad,
        empleado.imagen
      ),
    });

    dialogo1.afterClosed().subscribe((emp) => {
      if (emp != undefined) {
        this.httpCliente
          .modificarEmpleado(emp)
          .subscribe((resultado) => this.empleado);
      }
    });
  }
}
