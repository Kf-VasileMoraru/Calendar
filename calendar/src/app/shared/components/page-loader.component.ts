import { Component } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  template: `
    <div class="h-20 w-20 animate-spin [animation-duration:2s] [animation-iteration-count:infinite] [animation-timing-function:linear]">
      <img [src]="loadingImg" alt="Loading..." />
    </div>
  `,
})
export class PageLoaderComponent {
  loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
}
