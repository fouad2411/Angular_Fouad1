import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {}

  guardar() {
    this.dialogRef.close(this.data);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
