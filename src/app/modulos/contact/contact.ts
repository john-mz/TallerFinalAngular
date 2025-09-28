import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  miFormulario: any = FormGroup<{
    nombre: FormControl<string>;
    email: FormControl<string>;
    mensaje: FormControl<string>;
  }>

  constructor(private fb: NonNullableFormBuilder){
    this.miFormulario = this.fb.group(
      {
        nombre: this.fb.control('', {validators: [Validators.required]}),
        email: this.fb.control('', {validators: [Validators.required, Validators.email]}),
        mensaje: this.fb.control('', {validators: [Validators.required]})
      }
      
  );
  }

  onSubmit(): void{
    if(this.miFormulario.valid){
      alert("form enviado con exito");
    }
  }
    
}

