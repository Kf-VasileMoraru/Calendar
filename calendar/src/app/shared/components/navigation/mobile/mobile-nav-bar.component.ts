import { Component, inject } from '@angular/core';
import { MobileNavBarBrandComponent } from './mobile-nav-bar-brand.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { MatRipple } from '@angular/material/core';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  imports: [MobileNavBarBrandComponent, MatIcon, MatIconButton, MatMenu, MatMenuTrigger, MatMenuItem, MatDivider, MatRipple, AsyncPipe],
  selector: 'app-mobile-nav-bar',
  template: `
    <app-mobile-nav-bar-brand class="pl-5"></app-mobile-nav-bar-brand>
    <button
      mat-icon-button
      matRipple
      [matRippleColor]="'rgb(139 92 246 / 0.2)'"
      [matRippleCentered]="true"
      class="flex h-15 w-15 items-center justify-center"
      [matMenuTriggerFor]="menu"
    >
      <mat-icon class="h-10 w-11 scale-120 text-4xl">menu</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <span>Home</span>
      </button>
      <button mat-menu-item disabled>
        <span>Check voice mail</span>
      </button>
      <mat-divider></mat-divider>
      @if (auth.isAuthenticated$ | async) {
        <button mat-menu-item (click)="handleLogout()">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      } @else {
        <button mat-menu-item (click)="handleSignUp()">
          <mat-icon>person_add</mat-icon>
          <span>SignUp</span>
        </button>
        <button mat-menu-item (click)="handleLogin()">
          <mat-icon>login</mat-icon>
          <span>Login</span>
        </button>
      }
    </mat-menu>
  `,
})
export class MobileNavBarComponent {
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
