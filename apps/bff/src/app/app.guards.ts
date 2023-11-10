import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DeviceDetectorService } from './services/device-detector.service';
import { inject } from '@angular/core';

export const deviceGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot
): Observable<boolean> => {
  const deviceDetectorService = inject(DeviceDetectorService);
  const router = inject(Router);
  const isMobile = deviceDetectorService.isMobile();
  const targetRoute = next.url[0].path;

  if (
    (isMobile && targetRoute === 'mobile') ||
    (!isMobile && targetRoute === 'desktop')
  ) {
    return of(true);
  } else {
    router.navigate([isMobile ? '/mobile' : '/desktop']);
    return of(false);
  }
};
