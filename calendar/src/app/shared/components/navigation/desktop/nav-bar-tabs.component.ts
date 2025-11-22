import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavBarTabComponent } from './nav-bar-tab.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar-tabs',
  imports: [NavBarTabComponent, AsyncPipe],
  template: `
    <app-nav-bar-tab path="/" label="Home"></app-nav-bar-tab>
    <app-nav-bar-tab path="/profile" label="Profile"></app-nav-bar-tab>
    <app-nav-bar-tab path="/public" label="Public"></app-nav-bar-tab>
    @if (isAuthenticated$ | async) {
      <app-nav-bar-tab path="/protected" label="Protected"></app-nav-bar-tab>
      <app-nav-bar-tab path="/admin" label="Admin"></app-nav-bar-tab>
    }
  `,
})
export class NavBarTabsComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;
}
