module.exports = {
  clearMocks: true,
  setupFiles: ['<rootDir>/testSetup.js'],
  rootDir: 'src',
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
