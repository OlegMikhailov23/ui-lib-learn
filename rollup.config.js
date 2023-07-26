import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { visualizer } from "rollup-plugin-visualizer";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const isDev = process.env.NODE_ENV === "development";

export default [
  {
    input: ["./src/index.ts"],
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        sourcemap: isDev,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
        sourceMap: isDev,
      }),
      isDev ? null : terser(),
      isDev ? visualizer({
        filename: "analysis.html",
        open: true,
      }) : null
    ]
  },
];
