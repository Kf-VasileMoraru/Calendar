import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavBarTabComponent } from './nav-bar-tab.component';

@Component({
  selector: 'app-nav-bar-buttons',
  imports: [AsyncPipe, MatButtonModule, NavBarTabComponent],
  template: `
    <div class="">
      @if (isAuthenticated$ | async) {
        <app-nav-bar-tab label="Logout" (click)="handleLogout()"></app-nav-bar-tab>
      } @else {
        <app-nav-bar-tab label="Signup" (click)="handleSignUp()"></app-nav-bar-tab>
        <app-nav-bar-tab label="Login" (click)="handleLogin()"></app-nav-bar-tab>
      }
    </div>
  `,
})
export class NavBarButtonsComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);
  isAuthenticated$ = this.auth.isAuthenticated$;
  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }
}
