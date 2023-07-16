import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import rollup from "rollup";

const extensions = [".js", ".ts"];

export default rollup.defineConfig({
  external: /node_modules/,
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
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions,
      plugins: ["@babel/plugin-transform-runtime"],
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
    }),
  ],
});
