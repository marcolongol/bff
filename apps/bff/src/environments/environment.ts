import { ReadonlyEnvironment } from '../app/types/environment.model';
import { BASE_ENVIRONMENT } from './environment.base';

export const environment: ReadonlyEnvironment = {
  ...BASE_ENVIRONMENT,
  env: {
    ...BASE_ENVIRONMENT.env,
    BFF_DESKTOP_API_PORT:
      'e290-2607-fb91-15ab-4fd8-7dda-1b2-a936-e6d.ngrok-free.app',
    BFF_MOBILE_API_PORT:
      '123c-2607-fb91-15ab-4fd8-7dda-1b2-a936-e6d.ngrok-free.app',
  },
  production: false,
};
