module.exports = {
  clearMocks: true,
  setupFiles: ['<rootDir>/testSetup.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Jest Test',
        outputDirectory: 'reports',
        outputName: 'jest.xml'
      }
    ]
  ],
  rootDir: 'src',
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
