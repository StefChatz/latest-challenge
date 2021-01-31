module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'no-return-await': 0,
    'react/forbid-prop-types': 0,
    camelcase: 0,
    'react/no-array-index-key': 0,
    'eslint-disable-next-line': 0,
  },
};
