/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["skylight/base", "skylight/prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  overrides: [
    {
      extends: ["plugin:jest/recommended"],
      files: ["src/*.spec.ts"],
      plugins: ["jest"],
    }
  ]
};
