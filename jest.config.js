module.exports = {
  testMatch: ["<rootDir>/src/**/*.spec.{ts,tsx}"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["json", "js", "ts", "jsx", "tsx"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov"]
}
