import { ReadonlyEnvironment } from '../app/types/environment.model';
import { BASE_ENVIRONMENT } from './environment.base';

export const environment: ReadonlyEnvironment = {
  ...BASE_ENVIRONMENT,
  production: false,
};
