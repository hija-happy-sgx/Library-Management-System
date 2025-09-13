import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { ViewPage } from './pages/view-page/view-page';
import { Home } from './pages/home/home';

export const routes: Routes = [
    // {path:"", component:Navbar}
    {path:"", component:Home},
    {path:"register", component:Register},
    {path:"login", component:Login},
    {path:"browse", component:ViewPage},

    
];
