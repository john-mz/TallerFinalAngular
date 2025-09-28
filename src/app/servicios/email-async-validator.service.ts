import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { AccesosService } from './accesos.service';

@Injectable({
  providedIn: 'root'
})
export class EmailAsyncValidatorService implements AsyncValidator{
  constructor(private AccesosService: AccesosService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    if (!email) return of(null);
    return of(this.AccesosService.verificarCorreo(email)).pipe(
      delay(300),
      map(isTaken => (isTaken ? {emailTaken: true}: null))
    );
  }
}
