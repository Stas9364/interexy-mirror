import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      prettier: prettierPlugin,
    },
    languageOptions: { parser: parserTs },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
];

export default eslintConfig;
