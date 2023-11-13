import { ReadonlyEnvironment } from '../app/types/environment.model';
import { BASE_ENVIRONMENT } from './environment.base';

export const environment: ReadonlyEnvironment = {
  ...BASE_ENVIRONMENT,
  env: {
    ...BASE_ENVIRONMENT.env,
    BFF_DESKTOP_API_PORT:
      '3255-2607-fb91-15ab-4fd8-b8ea-3cb5-7203-393e.ngrok-free.app',
    BFF_MOBILE_API_PORT:
      '2edf-2607-fb91-15ab-4fd8-b8ea-3cb5-7203-393e.ngrok-free.app',
  },
  production: false,
};
