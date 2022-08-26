module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    eqeqeq: 2,
    'no-var': 2,
    'no-cond-assign': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'no-unreachable': 2,
    'no-const-assign': 2,
    'no-redeclare': 2,
    'no-global-assign': 2,
    'no-empty-pattern': 2,
    'no-self-assign': 2,
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
