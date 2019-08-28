module.exports = {
  clearMocks: true,
  setupFiles: ['<rootDir>/testSetup.ts'],
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
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};
