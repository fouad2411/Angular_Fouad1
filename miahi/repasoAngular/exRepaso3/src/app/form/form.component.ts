import { Component } from '@angular/core';
import { RegistroSService } from '../registro-s.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  usuarios: Usuario[] = [];
  constructor(private servicio: RegistroSService) {}
  usuario: Usuario = new Usuario();
  ngOnInit() {
    this.servicio.obtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }
  Registrar() {
    this.servicio.insertarUsuario(this.usuario).subscribe((x: Usuario) => {
      this.usuario = x;
    });
  }
}
