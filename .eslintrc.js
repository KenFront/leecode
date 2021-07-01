module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['standard', 'plugin:jest/recommended', 'prettier'],
  plugins: ['jest', 'prettier'],
  globals: {
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 10,
  },
  rules: {
    'prettier/prettier': ['error'],
    'jest/no-focused-tests': 'off',
    'default-case-last': 'off',
  },
}
