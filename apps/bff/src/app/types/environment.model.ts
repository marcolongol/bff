import { DeepReadonly } from '../utils/utils';

export interface Environment {
  production: boolean;
  env: NodeJS.ProcessEnv;
}

export type ReadonlyEnvironment = DeepReadonly<Environment>;
