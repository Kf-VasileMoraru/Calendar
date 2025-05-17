import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [RouterModule, MatButton],
  selector: 'app-nav-bar-tab',
  template: `
    <button
      mat-button
      [routerLink]="path"
      [routerLinkActiveOptions]="{ exact: true }"
      routerLinkActive="bg-blue-500/10"
      class="px-4 py-2 font-bold hover:bg-blue-500/10"
    >
      {{ label }}
    </button>
  `,
})
export class NavBarTabComponent {
  @Input() path: string | undefined;
  @Input() label: string | undefined;
}
