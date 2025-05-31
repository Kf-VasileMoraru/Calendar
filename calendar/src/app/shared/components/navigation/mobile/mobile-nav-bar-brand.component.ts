import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="h-14">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img class="h-full object-contain" [src]="loadingImg" alt="Auth0 shield logo" />
      </a>
    </div>
  `,
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();
  loadingImg = 'https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg';

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}
