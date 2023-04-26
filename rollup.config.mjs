import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js", ".ts"];

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = {
  external: [/node_modules/],
  input: "src/index.ts",
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
      interop: "esModule",
      preserveModules: true,
    },
    {
      dir: "lib/esm",
      format: "esm",
      preserveModules: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: "runtime",
      extensions,
      plugins: ["@babel/plugin-transform-runtime"],
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
    }),
  ],
};

export default rollupConfig;
