import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  login() {
    // В реальном приложении здесь может быть отправка данных на сервер для проверки авторизации
    // В данном случае мы просто вызываем метод login() из AuthService
    this.authService.login();
  }
}
