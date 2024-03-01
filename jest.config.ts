export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTest/index.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@constants': '<rootDir>/src/constants/index.ts',
    '^@shared(.*)$': '<rootDir>/src/$1',
    '\\.(css|svg|jpg)$': 'identity-obj-proxy'
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/utils/formatDayValid.ts']
};
