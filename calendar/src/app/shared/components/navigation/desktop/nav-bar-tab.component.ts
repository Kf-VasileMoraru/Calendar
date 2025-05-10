import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-nav-bar-tab',
  template: `
    <a [routerLink]="path" routerLinkActive="">
      {{ label }}
    </a>
  `,
})
export class NavBarTabComponent {
  @Input() path: string | undefined;
  @Input() label: string | undefined;
}
