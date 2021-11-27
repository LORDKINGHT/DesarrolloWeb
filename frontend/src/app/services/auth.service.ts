import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


/**

 * @fileoverview  Rutas de Acceso

 * @version       1.0

 * @author        Andres Garcia <afgarcia2@poligran.edu.co>
 * @author        Julio Parra <juparram@poligran.edu.co>              

 * @copyright     Contenido Libre

 *

 * History

 * v1.0 – Se creó el servicio de autenticación con diferentes funciones para ingresar, registrarse y cerrar sesion.


*/


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * 
   * @param email, password 
   * @returns 
   */
  signUp(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signup',user);
  }
  /**
   * 
   * @param user 
   * @returns 
   */
  signIn(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signin',user);
  }
  loggedIn():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
