module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@lusiaves': './src/',
        },
      },
    ],
    ["require-context-hook"]
  ],
};
