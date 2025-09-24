import { Component } from '@angular/core';
import { Nav } from '../estructura/nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [Nav, RouterModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
