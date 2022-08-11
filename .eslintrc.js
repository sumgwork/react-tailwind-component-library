module.exports = {
  root: true,
  env: {
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  plugins: [
    'prettier',
    'unused-imports',
    '@typescript-eslint',
    // 'testing-library'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'no-unused-vars': [
      2,
      {
        args: 'all',
        argsIgnorePattern: '^_',
      },
    ],
    'no-warning-comments': 0,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    // 'testing-library/await-async-query': 'error',
    // 'testing-library/no-await-sync-query': 'error',
    // 'testing-library/no-debugging-utils': 'warn',
    // 'testing-library/no-dom-import': 'off',
  },
};
