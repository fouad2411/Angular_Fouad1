import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {
  FRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      visa: ['', [Validators.required, Validators.pattern(/^4[0-9]{12}(?:[0-9]{3})?$/)]],
      mastercard: ['',[ Validators.required,Validators.pattern(/^5[1-5][0-9]{14}$/)]],
      american: ['', [Validators.required, Validators.pattern(/^3[4-7][0-9]{13}$/)]],
      discover: ['', [Validators.required, Validators.pattern(/^6(?:011|5[0-9]{2})[0-9]{12}$/)]],
      diners: ['', Validators.required,Validators.pattern(/^3(?:0[0-5]|[6-8]|[0-9])[0-9]{11}$/)],
      jcb: ['', Validators.required,Validators.pattern(/^(?:2131|1800|35\d{3})\d{11}$/)],
    })
  }
  comprobar() {
    if (this.FRegistro.valid ) {
      alert('Formulario correcto');
    } else {
      alert('Hay errores en el formulario');
    }
}}
