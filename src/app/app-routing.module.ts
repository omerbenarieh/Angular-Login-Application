import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoggedUserPageComponent } from './logged-user-page/logged-user-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-form', pathMatch: 'full' },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'logged-user-page', component: LoggedUserPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
