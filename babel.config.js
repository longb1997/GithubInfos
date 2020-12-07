module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@feature': './src/features',
          '@config': './src/config',
          '@navigation': './src/navigations',
          '@redux': './src/redux',
          '@utility': './src/utility',
          '@resources': './src/resources',
          '@constants': './src/constants',
          '@data': './src/data',
          '@loading': './src/loading',
        },
      },
    ],
  ],
};
