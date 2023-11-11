import { DefinePlugin } from 'webpack';
import { env } from 'process';

// * Secure Injection only for BFF_ env variables
function securedEnv(): Record<string, string> {
  const securedEnv = Object.keys(env)
    .filter((key) => key.startsWith('BFF_'))
    .reduce((acc, key) => {
      acc[key] = env[key] || '';
      console.log(`[BFF] Secured env: ${key}=${acc[key]}`);
      return acc;
    }, {} as Record<string, string>);
  return securedEnv;
}

export default {
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(securedEnv()),
    }),
  ],
};
