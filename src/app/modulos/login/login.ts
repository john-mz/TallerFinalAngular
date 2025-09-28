import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {AbstractControl, EmailValidator, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccesosService } from '../../servicios/accesos.service';

interface datos {
  nombre: String;
  edad: String;
  email: String;
  password: String;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  profileForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required, this.validarUsername]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  acceso: datos[] = []
  
  // accesos = [{password: "123456789", email: "johnstiven40@gmail.com"}, {password: "123456789", email: "john.munoz@uam.edu.co"}];

  constructor(private router: Router, private AccesosService: AccesosService) {
    this.acceso = AccesosService.consultar();

  }

  

  validarUsername(control: AbstractControl<string>): ValidationErrors | null{
    const valor = control.value;
    if (valor.includes(" ")){
      return {usernameInvalido: true};
    }
    return null;
  }

  login(): void {
  const username = this.profileForm.get('username')?.value;
  const email = this.profileForm.get('email')?.value;
  const password = this.profileForm.get('password')?.value;

  if (!email || !password || !username) {
    alert("No ingresaste nada en uno o varios campos");
    return;
  }

  if (username.includes(" ")){
    alert("Username con errores");
    return;
  }

  const accesoValido = this.acceso.some(
    acceso => acceso.email === email && acceso.password === password
  );

  if (accesoValido) {
    this.router.navigate(['/home']);
  } else {
    alert("Datos incorrectos");
  }

  }

  get campo(){
    return this.profileForm.controls;
  }
}
