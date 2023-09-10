module.exports = {
  // parser: 'babel-eslint',
  plugins: ['react'],
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/function-component-definition': 'off',
  },
};
