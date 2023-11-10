import { Route } from '@angular/router';
import { deviceGuard } from './app.guards';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mobile',
  },
  {
    path: 'mobile',
    loadComponent: () =>
      import('./components/mobile/mobile.component').then(
        (m) => m.MobileComponent
      ),
    canActivate: [deviceGuard],
  },
  {
    path: 'desktop',
    loadComponent: () =>
      import('./components/desktop/desktop.component').then(
        (m) => m.DesktopComponent
      ),
    canActivate: [deviceGuard],
  },
];
