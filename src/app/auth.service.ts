import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:3000/api';

  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, password: string){
    if(user == 'admin' && password == '1234'){
      localStorage.setItem('token', 'admin');
      this.router.navigate(['/']);
    }
  }

  logout(){
    localStorage.removeItem('token');
  }

  public get isLogged(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
