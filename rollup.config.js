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
            !source ||
            source.indexOf(`interface ${componentName}Props {`) === -1
          ) {
            return null;
          }
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

          // find name of prop interface --- i dont want to be to smart about it. Just take stupid component name and add props to add ... later on document it propertly

          // find that interface and its borders

          // extract information and convert in proper object

          //TODO
          // get enums
          // get default values

          this.emitFile({
            type: "asset",
            fileName: `form/${componentName}.json`,
            source: JSON.stringify({
              [componentName]: contentOfInterface,
            }),
          });
        }
      });

      // 1. dohvati interface i prop

      // iz prop-a mogu dobiti sto ce se koristiti kao input a iz interface-a dobijem kojeg su tipa

      /*
      {
        imeKomponente: {
          nazivProp: tip
        },
        enums: {
          naziv: {
            naziv:vrijednost
          }
        }
      }
      */
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
        source: JSON.stringify(JSON.stringify(outputObject)),
      });
    },
  };
}
