import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="h-14">
      <a routerLink="/">
        <img
          class="h-full object-contain"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
        />
      </a>
    </div>
  `,
  imports: [RouterLink],
})
export class NavBarBrandComponent {}
