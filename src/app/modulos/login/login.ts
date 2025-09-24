import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) { }
  profileForm = new FormGroup({
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  login(): void{
    if (this.profileForm.get('password')?.value == "" && this.profileForm.get('email')?.value == ""){
      alert("No ingresaste nada");
    }else if(this.profileForm.get('password')?.value == "123456789" && this.profileForm.get('email')?.value == "johnstiven40@gmail.com"){
      this.router.navigate(['/home']); 
    }else{
      alert("Datos incorrectos");
    }
  }

}
