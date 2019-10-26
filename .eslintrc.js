module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'prettier',
    'prettier/babel',
    'prettier/standard',
  ],
  plugins: ['jest', 'prettier'],
  globals: {
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 10,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
}
