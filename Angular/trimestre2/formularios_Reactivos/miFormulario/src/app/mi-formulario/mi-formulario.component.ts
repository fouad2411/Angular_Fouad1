import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {
  miFormulario!: FormGroup ;
  showAlert: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar el formulario reactivo con validaciones
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Manejar el envío del formulario
  onSubmit(): void {
    if (this.miFormulario.valid) {
      this.showAlert = true;
      console.log('Formulario enviado:', this.miFormulario.value);
    }
  }

  // Cerrar la alerta
  closeAlert(): void {
    this.showAlert = false;
  }
}
