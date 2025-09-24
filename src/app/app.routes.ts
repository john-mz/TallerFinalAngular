import { Routes } from '@angular/router';
import { Home } from './modulos/home/home';
import { About } from './modulos/about/about';
import { Contact } from './modulos/contact/contact';
import { Login } from './modulos/login/login';
import { Noencontro } from './modulos/noencontro/noencontro';
import { Principal } from './principal/principal';
import { Register } from './modulos/register/register';

export const routes: Routes = [
    { path: '', component: Principal,
        children: [
            {path: 'home', component: Home},
            {path: 'about', component: About},
            {path: 'contact', component: Contact},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: '**', component: Noencontro }
    
];


// import { Routes } from '@angular/router';
// import { Principal } from './estructura/principal';
// import { Dashboard } from './modulos/dashboard/dashboard';
// import { Clientes } from './modulos/clientes/clientes';
// import { Productos } from './modulos/productos/productos';
// import { Usuarios } from './modulos/usuarios/usuarios';
// import { Categoria } from './modulos/categoria/categoria';
// import { Login } from './modulos/login/login';
// import { Noencontro } from './modulos/noencontro/noencontro';

//         // if (path == '') component: Dashboard
// export const routes: Routes = [
//     {
//         path: '', component: Principal,
//         children:
//         [
//             {path: 'dashboard', component: Dashboard},
//             {path: 'clientes', component: Clientes},
//             {path: 'productos', component: Productos},
//             {path: 'usuarios', component: Usuarios},
//             {path: 'categorias', component: Categoria},
//             {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
//         ]
//     },

//     {path: 'login', component: Login},
//     {path: '**', component: Noencontro}
// ];
