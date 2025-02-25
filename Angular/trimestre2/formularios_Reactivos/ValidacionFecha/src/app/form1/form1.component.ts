import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  g1!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.g1 = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['',[ Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      cargo: ['', [Validators.required, Validators.pattern(/junior|senior|leader/)]],
      salario: ['', Validators.required,Validators.min(900),Validators.max(1200)],
    })
  }
  comprobar() {
    if (this.g1.valid ) {
      alert('Formulario correcto');
    } else {
      alert('Hay errores en el formulario');
    }
}}
