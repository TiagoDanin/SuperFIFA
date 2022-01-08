module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console', 'react-native-paper/babel'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
