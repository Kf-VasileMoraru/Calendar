import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-bar-brand',
  template: `
    <div class="h-14">
      <a routerLink="/">
        <img class="h-full object-contain" [src]="loadingImg" alt="Auth0 shield logo" />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {
  loadingImg = 'https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg';
}
