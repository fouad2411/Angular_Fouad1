import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  FRegistro!: FormGroup;
  igualPwd!: boolean;
  fechaValida!: boolean;

  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cumple: ['', Validators.required],
      trabajo: ['', [Validators.required, Validators.pattern(/tester|fullstack|backend|frontend/)]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Z].{8}[0-9]$/)]],
      repeatPassword: ['', Validators.required],
    }, { validators: this.comprobarIgualidadPassword });
  }

  comprobarIgualidadPassword(fgroup: FormGroup) {
    const p1 = fgroup.get('password')?.value;
    const p2 = fgroup.get('repeatPassword')?.value;

    // Comprobar que las contraseñas son iguales
    this.igualPwd = p1 === p2;

    // Validar fecha (debe ser anterior a la fecha actual)
    const fechaActual = new Date();
    const fechaCumple = fgroup.get('cumple')?.value;
    this.fechaValida = fechaCumple && new Date(fechaCumple) < fechaActual;
  }

  comprobar() {
    if (this.FRegistro.valid && this.igualPwd && this.fechaValida) {
      alert('Formulario correcto');
    } else {
      alert('Hay errores en el formulario');
    }
  }
}
