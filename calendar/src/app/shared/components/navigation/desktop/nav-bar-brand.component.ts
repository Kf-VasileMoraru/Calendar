import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-nav-bar-brand',
  template: `
    <div class="h-14 caret-transparent">
      <a routerLink="/">
        <img class="h-full object-contain" [src]="loadingImg" alt="Logo" />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {
  loadingImg = 'assets/images/logo.svg';
}
