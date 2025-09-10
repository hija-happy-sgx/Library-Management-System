import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Register } from './auth-screen/register/register';
import { Login } from './auth-screen/login/login';

export const routes: Routes = [
    // {path:"", component:Navbar}
    {path:"register", component:Register},
    {path:"login", component:Login},
    
];
