import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  registr(login: string, password: string): void {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    this.isAuth = true;
  }

  checkLogin(): Boolean {
    if(localStorage.getItem('login') && localStorage.getItem('password')) {
      return true;
    }
    return this.isAuth;
  }

  logout(): void {
    localStorage.clear();
    this.isAuth = false;
  }
}
