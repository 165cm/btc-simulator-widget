module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/**/*.test.{js,jsx}',
      '!src/index.js',
    ],
  };