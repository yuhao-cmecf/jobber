import js from '@eslint/js';
import nx from '@nx/eslint-plugin';

export default [
  js.configs.recommended,
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts'],
    rules: {
      '@nx/enforce-module-boundaries': 'error',
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
];
