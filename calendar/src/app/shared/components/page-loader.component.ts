import { Component } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  template: `
    <div class="w-20 h-20 animate-spin [animation-duration:2s] [animation-timing-function:linear] [animation-iteration-count:infinite]">
      <img [src]="loadingImg" alt="Loading..." />
    </div>
  `,
})
export class PageLoaderComponent {
  loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
}

