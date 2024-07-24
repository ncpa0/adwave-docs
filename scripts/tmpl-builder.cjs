const path = require("path");
const fs = require("fs");
const { renderToHtmlAsync, defineContext, JsxteRenderError } = require("jsxte");
const { jsx } = require("jsxte/jsx-runtime");
const esbuild = require("esbuild");
const { evalModule } = require("./eval-module.cjs");
const { changeExt } = require("./change-ext.cjs");
const { ExtFilesCtx } = require("./external-files-context.cjs");
const crypto = require("crypto");
const { default: dedent } = require("dedent");

function createHash(data, len) {
  return crypto
    .createHash("shake256", { outputLength: len })
    .update(data)
    .digest("hex");
}

const IS_DEV = process.argv.includes("--dev");

const p = (...pathSegments) => {
  return path.resolve(__dirname, "..", ...pathSegments);
};

const templatesSrc = p("src/templates");

/** @typedef {{ root: string; tsx: string }} Template */

/**
 * @param {string} srcDir
 * @param {Template} template
 * @param {string} outDir
 */
module.exports.buildTemplate = async function buildTemplate(
  srcDir,
  template,
  outDir,
) {
  const tsxFilename = path.join(template.root, template.tsx);

  const result = await esbuild.build({
    entryPoints: [tsxFilename],
    format: "cjs",
    jsxImportSource: "jsxte",
    jsxFactory: "jsxte.jsx",
    target: "es2020",
    keepNames: true,
    bundle: true,
    minify: !IS_DEV,
    write: false,
    sourcemap: IS_DEV ? "inline" : false,
    external: ["jsxte", "esbuild", "scripts", "prettier"],
    platform: "node",
    plugins: [plugin(srcDir, outDir)],
    alias: {
      scripts: p("./scripts"),
    },
  });

  const modExports = await evalModule(tsxFilename, result.outputFiles[0].text);

  const Component = modExports.default;

  if (typeof Component !== "function") {
    throw new Error(
      `Template ${tsxFilename} does not export a default function.`,
    );
  }

  /** @type {{ contents: string; outFile: string }[]} */
  const registeredExtFiles = [];
  const registerExternalFile = (contents, name, type) => {
    const hashedName = createHash(`${name}_${contents}`, 8);
    switch (type) {
      case "css": {
        const fPath = `/assets/css/${hashedName}.css`;
        registeredExtFiles.push({
          contents,
          outFile: path.join(outDir, fPath),
        });
        return fPath;
      }
      case "js": {
        const fPath = `/assets/js/${hashedName}.js`;
        registeredExtFiles.push({
          contents,
          outFile: path.join(outDir, fPath),
        });
        return fPath;
      }
    }
  };

  let html;
  try {
    html = await renderToHtmlAsync(
      jsx(
        ExtFilesCtx.Provider,
        { value: { register: registerExternalFile } },
        jsx(Component, {}),
      ),
      { pretty: true },
    );
  } catch (e) {
    if (JsxteRenderError.is(e)) {
      console.error(e.toString());
    }
    throw e;
  }

  const htmlRel = path.relative(templatesSrc, tsxFilename);
  const htmlOutFile = changeExt(path.join(outDir, htmlRel), "html");

  const baseDir = path.dirname(htmlOutFile);

  // make sure directory exists
  await fs.promises.mkdir(baseDir, { recursive: true });
  await fs.promises.writeFile(htmlOutFile, html, "utf8");

  await Promise.all(
    registeredExtFiles.map(({ contents, outFile }) => {
      return fs.promises.writeFile(outFile, contents, "utf8");
    }),
  );
};

/**
 * @param {string} srcDir
 * @param {string} outDir
 */
const plugin = (srcDir, outDir) => ({
  name: "tmpl-builder-plugin",
  /** @param {import("esbuild").PluginBuild} build */
  setup(build) {
    build.onResolve({ filter: /^scripts\/.+/ }, (args) => {
      const relative = args.path.substring("scripts/".length);
      return {
        external: true,
        path: p("scripts", relative) + ".cjs",
      };
    });

    build.onLoad({ filter: /.+\.tsx$/ }, async (args) => {
      const contents = await fs.promises.readFile(args.path, "utf8");

      // polyfill the __dirname and __filename variables

      const dirname = path.dirname(args.path);
      const filename = args.path;

      const code = `
        const __dirname = ${JSON.stringify(dirname)};
        const __filename = ${JSON.stringify(filename)};

        ${contents}
        `;

      return { contents: code, loader: "tsx" };
    });

    const BASE_URL = process.env.BASE_URL ?? "/docs/";
    build.onLoad({ filter: /\.svg$/ }, async (args) => {
      const relPath = path.relative(srcDir, args.path);
      await fs.promises.copyFile(args.path, path.join(outDir, relPath));
      const svgPath = path.join(BASE_URL, relPath);

      const componentName = path
        .basename(args.path, ".svg")
        .replace(/^\w/, (char) => char.toUpperCase()) // capitalize first letter
        .replace(/-\w/, (char) => char[1].toUpperCase()); // to camel case

      const code = /* js */ `
        import { jsx } from "jsxte/jsx-runtime";

        export default function Svg(props) {
          return jsx("img", {
            ...props,
            src: ${JSON.stringify(svgPath)},
          });
        }

        Svg.displayName = ${JSON.stringify(componentName)};
        `;
      return { contents: dedent(code.trimStart()), loader: "jsx" };
    });
  },
});
