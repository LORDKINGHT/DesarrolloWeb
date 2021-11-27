import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TasksComponent} from "./components/tasks/tasks.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { PrivateTasksComponent} from "./components/private-tasks/private-tasks.component";

import { AuthGuard } from './auth.guard';

/**

 * @fileoverview  Rutas de Acceso

 * @version       1.0

 * @author        Andres Garcia <afgarcia2@poligran.edu.co>
 * @author        Julio Parra <juparram@poligran.edu.co>              

 * @copyright     Contenido Libre

 *

 * History

 * v1.0 – Se crean las diferentes rutas para acceder a las diferentes pantallas de la pagina.


*/


const routes: Routes = [{
  
    path: '',
    redirectTo:'/tasks',
    pathMatch: 'full'

  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
 path:'tasks',
 component:TasksComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
