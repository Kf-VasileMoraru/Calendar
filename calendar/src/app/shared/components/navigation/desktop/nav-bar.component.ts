import { Component } from '@angular/core';
import { NavBarBrandComponent } from './nav-bar-brand.component';
import { NavBarTabsComponent } from './nav-bar-tabs.component';
import { NavBarButtonsComponent } from './nav-bar-buttons.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NavBarBrandComponent, NavBarTabsComponent, NavBarButtonsComponent],
  template: `
    <app-nav-bar-brand class="pl-5"></app-nav-bar-brand>
    <app-nav-bar-tabs></app-nav-bar-tabs>
    <app-nav-bar-buttons class="pr-5"></app-nav-bar-buttons>
  `,
})
export class NavBarComponent {}
