import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

// TODO: 1 Create a CanActivate guard that uses the following code to check for access.
// const authSvc = inject(AuthenticationService);
// const router = inject(Router);
// authSvc.requestedUrl = state?.url;
// if (authSvc.isLoggedIn) return true;
// router.navigate(['login']);
// return false;

