import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'validacion1';
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
  // Crear el formulario reactivo
  this.formulario = this.fb.group({
  nombre: [' ', [Validators.required, Validators.minLength(3)]],
   email: [' ', [Validators.required, Validators.email]],
  edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]], });
  //VALIDACIÓN DEL FORMULARIO Y CAPTURA DE DATOS
  submitForm() {
      if (this.form.valid) {
        const formData: UserData = this.form.value;}
}}}
