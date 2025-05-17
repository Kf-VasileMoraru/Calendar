import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PageLayoutComponent } from '../shared/components/page-layout.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-callback',
  imports: [PageLayoutComponent, AsyncPipe],
  template: `
    @if (error$ | async; as error) {
      <app-page-layout>
        <div class="mt-8 flex flex-col items-center justify-center gap-y-4">
          <p class="font-bold text-red-500">An error occurred!</p>
          <p class="text-gray-600">{{ error.message }}</p>
        </div>
      </app-page-layout>
    } @else {
      <app-page-layout />
    }
  `,
})
export class CallbackComponent {
  private auth = inject(AuthService);
  error$ = this.auth.error$;
}
