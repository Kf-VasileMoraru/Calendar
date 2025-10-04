import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { provideAuth0 } from '@auth0/auth0-angular';
import { ROUTES } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(ROUTES),
    provideAuth0({
      ...environment.auth0,
      // httpInterceptor: {
      //   ...env.httpInterceptor,
      // },
    }),
  ],
};
