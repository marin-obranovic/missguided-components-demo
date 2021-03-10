import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import styles from "rollup-plugin-styles";
import reactSvg from "@svgr/rollup";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    // reactSvg({ native: true }),
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    reactSvg({ native: true }),
    styles(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
