const esbuild = require("esbuild");
const path = require("path");
const { walk } = require("node-os-walk");

const IS_DEV = process.argv.includes("--dev");

const p = (...pathSegments) => {
  return path.resolve(__dirname, "..", ...pathSegments);
};

async function buildServiceWorkers(outDir) {
  const srcDir = p("src/service-workers");

  /**
   * @type {{ filepath: string; name: string }[]}
   */
  const serviceWorkers = [];

  for await (const [root, dirs, files] of walk(srcDir)) {
    for (const file of files) {
      if (file.name.endsWith(".sw.ts")) {
        const ext = path.extname(file.name);
        const name = path.basename(file.name, ext) + ".js";

        serviceWorkers.push({
          filepath: path.join(root, file.name),
          name,
        });
      }
    }
  }

  return await Promise.all(serviceWorkers.map(async sw => {
    const outfile = path.join(outDir, sw.name);
    await esbuild.build({
      entryPoints: [sw.filepath],
      outfile: path.join(outDir, sw.name),
      format: "esm",
      target: "es2020",
      keepNames: true,
      bundle: true,
      minify: !IS_DEV,
      sourcemap: IS_DEV ? "inline" : false,
      platform: "browser",
      define: {
      	__DEV__: String(IS_DEV),
      }
    });
  }));
}

module.exports.buildServiceWorkers = buildServiceWorkers;
