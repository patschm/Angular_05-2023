import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { DataService } from './data.service';

export const dataGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  {
    const svc = inject(DataService);
    return svc.text;
  };
