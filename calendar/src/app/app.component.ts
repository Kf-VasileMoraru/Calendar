import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLoaderComponent } from './shared/components/page-loader.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, PageLoaderComponent],
  template: `
    @if (isAuth0Loading$ | async) {
      <div class="flex h-full w-full flex-col items-center justify-center">
        <app-page-loader></app-page-loader>
      </div>
    } @else {
      <router-outlet></router-outlet>
    }
  `,
})
export class AppComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
}
