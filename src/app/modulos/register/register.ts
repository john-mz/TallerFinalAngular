import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccesosService } from '../../servicios/accesos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmailAsyncValidatorService } from '../../servicios/email-async-validator.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form: FormGroup;

  constructor(private router: Router, private AccesosService: AccesosService, private emailValidator: EmailAsyncValidatorService){
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.required]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.emailValidator.validate.bind(this.emailValidator)]
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    if (this.form.valid){
      const nombre = this.form.get('nombre')?.value ?? '';
      const edad = this.form.get('edad')?.value ?? '';
      const email = this.form.get('email')?.value ?? '';
      const password = this.form.get('password')?.value ?? '';
      this.AccesosService.agregar(nombre, edad, email, password);
      this.router.navigate(['/login']);
    }

  }
}
 