import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route) => {
  return route.queryParams.allowed;
};