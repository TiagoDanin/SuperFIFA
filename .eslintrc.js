module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:react-native/all', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    'prettier',
    'prefer-arrow-functions',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'react/destructuring-assignment': 'off',
    'react-native/no-inline-styles': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'warn',
    'default-case': 'warn',
    'react-native/split-platform-components': 'off',
    'react/require-default-props': 'warn',
    'lines-between-class-members': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
