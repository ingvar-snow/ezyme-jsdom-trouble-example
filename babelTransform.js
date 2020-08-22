const babelJest = require('babel-jest');

const babelTransform = babelJest.createTransformer({
  presets: [
    [
      require.resolve('@babel/preset-env'), { targets: { node: 'current' } }
    ],
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-typescript')
  ],
  "plugins": [
    require.resolve("@babel/plugin-proposal-class-properties")
  ],
  babelrc: false,
  configFile: false
});

module.exports = babelTransform;
