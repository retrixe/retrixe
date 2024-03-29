module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'standard-jsx',
    'standard-react',
    'plugin:prettier/recommended',
  ],
  overrides: [{ files: ['*.ts', '*.tsx'] }],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
}
