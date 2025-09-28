import { Injectable } from '@angular/core';

interface datos {
  nombre: String;
  edad: String;
  email: String;
  password: String;
}

@Injectable({
  providedIn: 'root'
})
export class AccesosService {
  private accesos: datos[] = [
    {nombre: "Stiven", edad: "21", email: "johnstiven40@gmail.com", password: "123456789"}, 
    {nombre: "Stiven2", edad: "20", email: "john.munoz@uam.edu.co", password: "123456789"}
  ];

  consultar(): datos[]{
    return this.accesos;
  }

  agregar(nombre: String, edad: String, email: String, password: String): void{
    this.accesos.push({nombre: nombre, edad: edad, email: email, password: password});
  }

  verificarCorreo(email: string): boolean{
    return this.accesos.some(acceso => acceso.email == email);
  }

}
