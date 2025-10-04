import { Component } from '@angular/core';
import { PageLayoutComponent } from '../shared/components/page-layout.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PageLayoutComponent, RouterLink],
  selector: 'app-not-found',
  template: `
    <app-page-layout>
      <div class="mt-8 p-12 text-center">
        <h1 class="mb-4 text-5xl font-bold text-red-600">404</h1>
        <h2 class="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p class="mb-8 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <a
          routerLink="/"
          class="inline-block rounded bg-blue-400 px-8 py-3 font-medium text-white no-underline transition-colors duration-200 hover:bg-blue-500"
        >
          Go to Home
        </a>
      </div>
    </app-page-layout>
  `,
})
export class NotFoundComponent {}
