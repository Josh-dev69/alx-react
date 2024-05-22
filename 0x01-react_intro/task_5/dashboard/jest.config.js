// config/jest.config.js

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/config/styleMock.js',
    '\\.(css|less)$': '<rootDir>/config/styleMock.js',
  }
};
