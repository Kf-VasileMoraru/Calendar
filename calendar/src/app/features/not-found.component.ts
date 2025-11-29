import { Component } from '@angular/core';
import { PageLayoutComponent } from '../shared/components/page-layout.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [PageLayoutComponent, RouterLink, MatButton],
  selector: 'app-not-found',
  template: `
    <app-page-layout>
      <div class="mt-8 p-12 text-center">
        <h1 class="mb-4 text-5xl font-bold text-red-600">404</h1>
        <h2 class="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p class="mb-8 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <button matButton="filled" routerLink="/">Go to Home</button>
      </div>
    </app-page-layout>
  `,
})
export class NotFoundComponent {}
