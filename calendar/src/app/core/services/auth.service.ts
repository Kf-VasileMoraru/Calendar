import { inject, Injectable, DOCUMENT } from '@angular/core';
import { AuthService as Auth0 } from '@auth0/auth0-angular';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth0);
  private doc = inject(DOCUMENT);
  isAuthenticated$ = this.auth.isAuthenticated$;

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }
}
