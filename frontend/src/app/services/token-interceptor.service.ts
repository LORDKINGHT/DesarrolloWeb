import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
 const tokenizeReq= req.clone({
    setHeaders:{
      Authorization: `Bearer ${this.authService.getToken()}`
    }
  })
  return next.handle(tokenizeReq);
}
  constructor(private authService: AuthService) { }
}
