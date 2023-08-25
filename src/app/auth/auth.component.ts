import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  username: string = '';
  password: string = '';

  login() {
    this.authService.login(this.username, this.password );
  }
}
