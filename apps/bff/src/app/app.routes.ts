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
      import('./components/pokemon/pokemon.component').then(
        (m) => m.PokemonComponent
      ),
    canActivate: [deviceGuard],
    data: {
      device: 'Mobile',
    },
  },
  {
    path: 'desktop',
    loadComponent: () =>
      import('./components/pokemon/pokemon.component').then(
        (m) => m.PokemonComponent
      ),
    canActivate: [deviceGuard],
    data: {
      device: 'Desktop',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
