import { DeepReadonly } from './utils';

export interface Environment {
  production: boolean;
  env: NodeJS.ProcessEnv;
}

export type ReadonlyEnvironment = DeepReadonly<Environment>;
