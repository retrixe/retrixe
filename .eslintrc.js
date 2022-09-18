module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'standard-jsx',
    'standard-react'
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.json' }
    }
  ],
  ignorePatterns: ['next-env.d.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
