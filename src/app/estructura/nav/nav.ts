import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav',
  imports: [MenubarModule, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  menuItems: MenuItem[] = [
  { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
  { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
  { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
];

rightMenuItems: MenuItem[] = [
  { label: 'Login', icon: 'pi pi-sign-in', routerLink: '/login' },
  { label: 'Register', icon: 'pi pi-user-plus', routerLink: '/register' }
];
}
