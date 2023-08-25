import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'admin' && password === '123') {
      this.isAuthenticated = true;
      this.router.navigate(['/post-list']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
