import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavBarTabComponent } from './nav-bar-tab.component';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar-buttons',
  imports: [AsyncPipe, MatButtonModule, NavBarTabComponent],
  template: `
    @if (auth.isAuthenticated$ | async) {
      <app-nav-bar-tab label="Logout" (click)="handleLogout()"></app-nav-bar-tab>
    } @else {
      <app-nav-bar-tab label="Signup" (click)="handleSignUp()"></app-nav-bar-tab>
      <app-nav-bar-tab label="Login" (click)="handleLogin()"></app-nav-bar-tab>
    }
  `,
})
export class NavBarButtonsComponent {
  auth = inject(AuthService);

  handleSignUp(): void {
    this.auth.handleSignUp();
  }

  handleLogout(): void {
    this.auth.handleLogout();
  }

  handleLogin(): void {
    this.auth.handleLogin();
  }
}
