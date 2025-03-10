import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { privadoGuard, productosGuard } from './guards/privado.guard';
import { ProductosComponent } from './pages/productos/productos.component';
import { ComponentFixture } from '@angular/core/testing';
import { Productos2Component } from './pages/productos2/productos2.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component:ProductosComponent, canMatch:[productosGuard]},
    {path: 'privado', component:PrivadoComponent, canActivate:[loginGuard]},
    {path: 'login', component:LoginComponent, canActivate:[privadoGuard]},
    {path: 'productos', component:Productos2Component},
];
