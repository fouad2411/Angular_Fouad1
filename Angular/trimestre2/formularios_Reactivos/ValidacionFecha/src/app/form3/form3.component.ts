import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  FRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      letras: ['', [Validators.required, Validators.pattern(/^[a-zA-z]+$/)]],
      numeros: ['',[ Validators.required,Validators.pattern(/^[0-9]+$/)]],
      mayuscula: ['', [Validators.required, Validators.pattern(/^[A-Z]+$/)]],
      rangoNumerico: ['', [Validators.required, Validators.min(100) , Validators.min(200)]],
      cincoNumeros: ['', Validators.required,Validators.pattern(/^\d{5}$/)],
      diezLetras: ['', Validators.required,Validators.pattern(/^[a-zA-Z]{10}$/)],
    })
  }
  comprobar() {
    if (this.FRegistro.valid ) {
      alert('Formulario correcto');
    } else {
      alert('Hay errores en el formulario');
    }
  }
}
