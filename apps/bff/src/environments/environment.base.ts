import { ReadonlyEnvironment } from '../app/models/environment.model';

export const BASE_ENVIRONMENT: ReadonlyEnvironment = {
  production: false,
  env: { ...process.env },
};
