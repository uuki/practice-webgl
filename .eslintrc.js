module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  globals: {
    window: true,
  },
  parserOptions: { ecmaVersion: 9, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
      settings: {},
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [],
      rules: {},
    },
  ],
}
