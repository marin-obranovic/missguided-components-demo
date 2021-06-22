import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import styles from "rollup-plugin-styles";
import reactSvg from "@svgr/rollup";
import typescript from "rollup-plugin-typescript";

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
    typescript(),
    extractInterfaceInformation(),
    del({ targets: ["dist/*"] }),
    reactSvg({ native: true }),
    styles(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

function extractInterfaceInformation() {
  return {
    name: "extract-interface-information",
    async transform(code, id) {
      console.log("id:", id);
      if ((id.indexOf(".tsx") || id.indexOf(".ts")) < 0) {
        return null;
      }
      const parsedCode = this.parse(code);
      parsedCode.body.forEach((item) => {
        if (item.type === "ExportNamedDeclaration") {
          const componentName = item.declaration.declarations[0].id.name;

          const source = this.getCombinedSourcemap().sourcesContent[0];
          if (
            source &&
            source.indexOf(`interface ${componentName}Props {`) > -1
          ) {
            const contentOfInterface = {};
            source
              .split(`interface ${componentName}Props {`)[1]
              .split("}")[0]
              .replace(/\s+/g, "")
              .split(";")
              .forEach((item) => {
                const [key, value] = item.split(":");
                contentOfInterface[key] = value;
              });

            this.emitFile({
              type: "asset",
              fileName: `form/${componentName}.json`,
              source: JSON.stringify({
                [componentName]: contentOfInterface,
              }),
            });
          }

          if (source.indexOf("enum") > -1) {
            const enums = Array.from(
              source.matchAll(/enum .*? {([^}]+)}/g) || []
            );
            enums.forEach((item) => {
              const enumName = item[0]
                .replace(/\s+/g, "")
                .replace(/enum/g, "")
                .split("{")[0];

              const enumObject = { [enumName]: {} };

              const values = item[1]
                .replace(/\s+/g, "")
                .replace(/=+/g, ":")
                .split(",");

              values.forEach((item, index) => {
                if (item.indexOf(":") === -1 && item !== "") {
                  enumObject[enumName][item] = index;
                } else {
                  const [name, value] = item.replace(/"+/g, "").split(":");
                  enumObject[enumName][name] = value;
                }
              });

              this.emitFile({
                type: "asset",
                fileName: `enum/${enumName}.json`,
                source: JSON.stringify(enumObject),
              });
            });
          }

          //TODO
          // get default values
        }
      });
    },
    async generateBundle(options, bundle) {
      const outputFilename = "form/information.json";
      const outputObject = {};
      Object.keys(bundle)
        .filter(
          (key) =>
            key.indexOf("form/") >= 0 && key.indexOf(outputFilename) === -1
        )
        .forEach((item) => {
          const inputObject = JSON.parse(bundle[item].source);
          Object.keys(inputObject).forEach((key) => {
            outputObject[key] = inputObject[key];
          });
          delete bundle[item];
        });

      this.emitFile({
        type: "asset",
        fileName: outputFilename,
        source: JSON.stringify(outputObject),
      });

      const enumOutputObject = {};

      Object.keys(bundle)
        .filter(
          (key) =>
            key.indexOf("enum/") >= 0 && key.indexOf("enum/enum.json") === -1
        )
        .forEach((item) => {
          const inputObject = JSON.parse(bundle[item].source);
          Object.keys(inputObject).forEach((key) => {
            enumOutputObject[key] = inputObject[key];
          });
          delete bundle[item];
        });

      this.emitFile({
        type: "asset",
        fileName: "enum/enum.json",
        source: JSON.stringify(enumOutputObject),
      });
    },
  };
}
