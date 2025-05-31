import { Component } from '@angular/core';
import { PageFooterComponent } from './page-footer.component';
import { NavBarComponent } from './navigation/desktop/nav-bar.component';
import { MobileNavBarComponent } from './navigation/mobile/mobile-nav-bar.component';

@Component({
  selector: 'app-page-layout',
  imports: [PageFooterComponent, NavBarComponent, MobileNavBarComponent],
  template: `
    <div class="flex h-screen w-full flex-col items-center bg-amber-400">
      <app-nav-bar class="hidden w-full flex-row items-center justify-between md:flex"></app-nav-bar>
      <app-mobile-nav-bar class="fixed z-300 flex w-full flex-shrink-0 justify-between bg-black md:hidden"></app-mobile-nav-bar>
      <div class="w-full flex-1">
        <ng-content></ng-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class PageLayoutComponent {}
