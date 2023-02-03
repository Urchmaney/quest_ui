import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, RegisterModel } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  full_name: string;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.email = '';
    this.full_name = '';
    this.password = '';
  }

  registerUser() {
    this.authService.registerUser({
      full_name: this.full_name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password
    }, () => { this.router.navigate(['/login']) });
  }
}
