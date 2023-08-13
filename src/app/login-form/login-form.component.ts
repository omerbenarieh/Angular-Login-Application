import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(public router: Router, public authService: AuthService) {}

  displaySignup(event) {
    this.router.navigate(['signup-form']);
  }

  signIn(email: string, password: string) {
    this.authService.SignIn(email, password);
  }

  ngOnInit(): void {}
}
