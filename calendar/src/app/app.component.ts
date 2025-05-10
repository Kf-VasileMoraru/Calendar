import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLoaderComponent } from './shared/components/page-loader.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, PageLoaderComponent],
  template: `
    <div
      class="flex h-full w-full flex-col items-center justify-center"
      *ngIf="isAuth0Loading$ | async; else auth0Loaded"
    >
      <app-page-loader></app-page-loader>
    </div>
    <ng-template #auth0Loaded>
      <router-outlet></router-outlet>
    </ng-template>
  `,
})
export class AppComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
}
