module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.[jt]s?(x)?$': require.resolve('./babelTransform.js'),
  }
};
