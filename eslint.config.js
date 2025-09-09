// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect React version from node_modules
      },
    },
  },
  // Test files configuration
  {
    files: ['**/*.test.js', '**/*.test.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-expressions': 'off',
    },
  },
];
