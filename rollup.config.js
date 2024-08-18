import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import packageJson from "./package.json";

export default {
   input: "src/index.js",
   output: [
      {
         file: packageJson.main,
         format: "cjs",
         sourcemap: true,
      },
      {
         file: packageJson.module,
         format: "esm",
         sourcemap: true,
      },
   ],
   plugins: [
      peerDepsExternal(),
      resolve({
         extensions: [".js", ".jsx"],
      }),
      commonjs(),
      babel({
         exclude: "node_modules/**",
         presets: ["@babel/preset-react"],
      }),
      postcss({
         extensions: [".css"],
      }),
      terser(),
   ],
};
