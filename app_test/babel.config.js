module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@API': './src/API',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@navigators': './src/navigators',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
