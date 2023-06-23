import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const auth = inject(AuthService);
      const router = inject(Router);

      auth.requestedUrl = state.url;
      if (auth.isLoggedIn) return true;
      router.navigate(['login']);
      return false;
  }
