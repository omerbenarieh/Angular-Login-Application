import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  createUser(email: string, password: string, fullName: string) {
    this.authService.SignUp(email, password, fullName);
  }

  goToLogin() {
    this.router.navigate(['login-form']);
  }
  ngOnInit() {}
}
