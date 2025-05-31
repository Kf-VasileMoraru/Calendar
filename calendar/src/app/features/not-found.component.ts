import { Component } from '@angular/core';
import { PageLayoutComponent } from '../shared/components/page-layout.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PageLayoutComponent, RouterLink],
  selector: 'app-not-found',
  template: `
    <app-page-layout>
      <div class="mt-8 p-12 text-center">
        <h1 style="font-size: 3rem; color: #d32f2f; margin-bottom: 1rem;">404</h1>
        <h2 style="margin-bottom: 1rem;">Page Not Found</h2>
        <p style="margin-bottom: 2rem; color: #666;">Sorry, the page you are looking for does not exist.</p>
        <a
          routerLink="/"
          style="
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #1976d2;
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
        "
          onmouseover="this.style.background='#1565c0'"
          onmouseout="this.style.background='#1976d2'"
        >
          Go to Home
        </a>
      </div>
    </app-page-layout>
  `,
})
export class NotFoundComponent {}
