const path = require("path");
const fs = require("fs");
const { renderToHtmlAsync } = require("jsxte");
const { jsx } = require("jsxte/jsx-runtime");
const esbuild = require("esbuild");
const { evalModule } = require("./eval-module.cjs");
const { changeExt } = require("./change-ext.cjs");

const p = (...pathSegments) => {
  return path.resolve(__dirname, "..", ...pathSegments);
};

const templatesSrc = p("src/templates");

/** @typedef {{ root: string; tsx: string }} Template */

/**
 * @param {Template} template
 * @param {string} outDir
 */
module.exports.buildTemplate = async function buildTemplate(
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
    write: false,
    external: ["jsxte", "esbuild"],
    platform: "node",
    plugins: [plugin],
  });

  const modExports = await evalModule(
    tsxFilename,
    result.outputFiles[0].text,
  );

  const Component = modExports.default;

  if (typeof Component !== "function") {
    throw new Error(
      `Template ${tsxFilename} does not export a default function.`,
    );
  }

  const html = await renderToHtmlAsync(jsx(Component, {}));

  const htmlRel = path.relative(templatesSrc, tsxFilename);
  const htmlOutFile = changeExt(path.join(outDir, htmlRel), "html");

  const baseDir = path.dirname(htmlOutFile);

  // make sure directory exists
  await fs.promises.mkdir(baseDir, { recursive: true });
  await fs.promises.writeFile(htmlOutFile, html);
};

const plugin = {
  name: "tmpl-builder-plugin",
  /** @param {import("esbuild").PluginBuild} build */
  setup(build) {
    build.onLoad({ filter: /\.tsx$/ }, async (args) => {
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
  },
};
