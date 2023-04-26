/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["skylight/base", "skylight/prettier"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  rules:{
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off"
  }
};
