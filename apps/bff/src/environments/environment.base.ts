import { ReadonlyEnvironment } from '../app/types/environment.model';

export const BASE_ENVIRONMENT: ReadonlyEnvironment = {
  production: false,
  env: { ...process.env },
};
