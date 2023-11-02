const fs = require("fs");
const { walk } = require("node-os-walk");
const path = require("path");
const { buildTemplate } = require("./tmpl-builder.cjs");
const { changeExt } = require("./change-ext.cjs");
const { Queue } = require("async-await-queue");
const rimraf = require("rimraf");

const p = (...pathSegments) => {
  return path.resolve(__dirname, "..", ...pathSegments);
};

const templatesSrc = p("src/templates");

/** @typedef {{ root: string; tsx: string }} Template */

async function build() {
  const outDir = p("docs");

  if (process.argv.includes("--clean")) {
    const outDirFiles = await fs.promises.readdir(outDir);

    await Promise.all(
      outDirFiles.map((f) => {
        return rimraf.rimraf(path.join(outDir, f));
      }),
    );
  }

  /** @type {Template[]} */
  const templates = [];

  for await (const [root, dirs, files] of walk(templatesSrc)) {
    for (const file of files) {
      const ext = path.extname(file.name);
      if (ext === ".tsx") {
        const filePath = path.join(root, file.name);

        const template = {
          root: root,
          tsx: path.basename(filePath),
        };

        templates.push(template);
      }
    }
  }

  await Promise.all(
    templates.map((tmpl) => {
      return buildTemplate(tmpl, outDir);
    }),
  );

  await fs.promises.cp(p("src/assets"), path.join(outDir, "assets"), { recursive: true });
}

const watch = process.argv.includes("--watch");

build()
  .catch((e) => {
    console.error(e);
    if (!watch) process.exit(1);
  })
  .finally(() => {
    if (watch) {
      const buildQueue = new Queue(1);

      const chokidar = require("chokidar");

      chokidar
        .watch(p("src"), { alwaysStat: false, ignoreInitial: true, useFsEvents: true })
        .on("all", (ev, fPath, stats) => {
          if (ev === "addDir") return;

          if (fPath.includes("src/assets")) {
            console.log(`Asset changed, copying (${path.relative(p("."), fPath)})`);
            const rel = path.relative(p("src/assets"), fPath);
            fs.promises.cp(fPath, path.join(p("docs/assets"), rel), {
              recursive: true,
            }).catch((e) => {
              console.error(e);
            });
            return;
          }

          console.log(`File changed, recompiling (${path.relative(p("."), fPath)})`);

          buildQueue.run(async () => {
            await build().catch((e) => {
              console.log(e);
            });
          });
        });
    }
  });
