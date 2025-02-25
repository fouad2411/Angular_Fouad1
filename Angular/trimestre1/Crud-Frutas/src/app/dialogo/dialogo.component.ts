import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FrutaC } from '../fruta-c';

@Component({
  selector: 'app-dialogo',
  standalone: false,

  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css',
})
export class DialogoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FrutaC
  ) {}
  Cancelar() {
    this.dialogRef.close();
  }
}
