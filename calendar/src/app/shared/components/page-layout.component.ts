import { Component } from '@angular/core';
import { PageFooterComponent } from './page-footer.component';
import { NavBarComponent } from './navigation/desktop/nav-bar.component';

@Component({
  selector: 'app-page-layout',
  imports: [PageFooterComponent, NavBarComponent],
  template: `
    <div class="flex h-screen w-full flex-col items-center bg-amber-400">
      <app-nav-bar class="flex w-full flex-row items-center justify-between "></app-nav-bar>
      <div class="w-full flex-1">
        <ng-content></ng-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class PageLayoutComponent {}
