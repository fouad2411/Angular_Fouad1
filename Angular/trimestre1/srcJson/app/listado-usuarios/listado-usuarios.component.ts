import { Component } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Usuario } from '../usuario';
import { PeticionesService } from '../peticiones.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { from } from 'rxjs';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'eliminar',
    'modificar',
  ];
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();
  datos: Usuario[] = [];

  constructor(public dialog: MatDialog, private http: PeticionesService) {}

  modificarUsuario(user: Usuario) {
    const dialogo = this.dialog.open(DialogoComponent, {
      data: new Usuario(
        user.id,
        user.first_name,
        user.last_name,
        user.email,
        user.gender
      ),
      width: '250px',
    });

    dialogo.afterClosed().subscribe((user: Usuario) => {
      if (user != undefined) {
        const usuario = this.datos.find((u) => u.id === user.id);
        if (usuario) {
          usuario.first_name = user.first_name;
          usuario.last_name = user.last_name;
          usuario.email = user.email;
          usuario.gender = user.gender;
          this.dataSource.data = this.datos;
        }
      }
    });
  }

  crearUsuario() {
    const dialogo = this.dialog.open(DialogoComponent, {
      data: new Usuario(0, '', '', '', ''),
      width: '250px',
    });

    dialogo.afterClosed().subscribe((user: Usuario) => {
      if (user != undefined) this.agregar(user);
    });
  }

  agregar(user: Usuario) {
    this.datos.push(user);
    this.dataSource.data = this.datos;
  }

  borrarUsuario(id: number) {
    const usuario = this.datos.find((user) => user.id === id);
    if (!usuario) {
      return;
    }
    console.log(usuario.id);
    this.datos.splice(this.datos.indexOf(usuario), 1);
    this.dataSource.data = this.datos;

    console.log('borrando usuario', usuario.first_name);
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe((data: Usuario[]) => {
      this.datos = data;
      this.dataSource.data = data;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
