import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-logged-user-page',
  templateUrl: './logged-user-page.component.html',
  styleUrls: ['./logged-user-page.component.css'],
})
export class LoggedUserPageComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
