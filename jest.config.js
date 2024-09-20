module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@common/(.*)': '<rootDir>/src/common/$1',
  },};

