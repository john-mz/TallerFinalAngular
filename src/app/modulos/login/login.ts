import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
  acceso: datos[] = [];
  
  // accesos = [{password: "123456789", email: "johnstiven40@gmail.com"}, {password: "123456789", email: "john.munoz@uam.edu.co"}];

  constructor(private router: Router, private AccesosService: AccesosService) {
    this.acceso = AccesosService.consultar();
  }

  profileForm = new FormGroup({
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  login(): void {
  const email = this.profileForm.get('email')?.value;
  const password = this.profileForm.get('password')?.value;

  if (!email || !password) {
    alert("No ingresaste nada");
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
}
