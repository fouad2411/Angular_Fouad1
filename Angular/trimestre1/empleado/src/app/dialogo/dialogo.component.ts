import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-dialogo',
  standalone: false,

  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css',
})
export class DialogoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Empleado
  ) {}
  Cancelar() {
    this.dialogRef.close();
  }
  guardar() {
    this.dialogRef.close(this.data);
  }
}
