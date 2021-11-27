import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import {AuthGuard  } from '../app/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

/**

 * @fileoverview  Modulos

 * @version       1.0

 * @author        Andres Garcia <afgarcia2@poligran.edu.co>
 * @author        Julio Parra <juparram@poligran.edu.co>              

 * @copyright     Contenido Libre

 *

 * History

 * v1.0 – Se agregan los modulos que se van a usar en el desarrollo del programa.


*/


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    PrivateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptorService,
       multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
