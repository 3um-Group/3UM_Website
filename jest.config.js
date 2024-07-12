const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"], 
  testEnvironment: "jest-environment-jsdom",
  preset: 'ts-jest'
};

module.exports = createJestConfig(customJestConfig);