import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavBarTabComponent } from './nav-bar-tab.component';

@Component({
  selector: 'app-nav-bar-tabs',
  imports: [NavBarTabComponent],
  template: `
    <app-nav-bar-tab path="/profile" label="Profile"></app-nav-bar-tab>
    <app-nav-bar-tab path="/public" label="Public"></app-nav-bar-tab>
    <ng-container @if(isAuthenticated$|async)>
      <app-nav-bar-tab path="/protected  " label="Protected"></app-nav-bar-tab>
      <app-nav-bar-tab path="/admin  " label="Admin"></app-nav-bar-tab>
    </ng-container>
  `,
})
export class NavBarTabsComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;
}
