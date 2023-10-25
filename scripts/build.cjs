const fs = require("fs");
const { walk } = require("node-os-walk");
const path = require("path");
const { buildTemplate } = require("./tmpl-builder.cjs");
const { changeExt } = require("./change-ext.cjs");
const { Queue } = require("async-await-queue");

const p = (...pathSegments) => {
  return path.resolve(__dirname, "..", ...pathSegments);
};

const templatesSrc = p("src/templates");

/** @typedef {{ root: string; tsx: string }} Template */

async function build() {
  const outDir = p("public");

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

      chokidar.watch(p("src")).on("all", () => {
        buildQueue.run(async () => {
          await build().catch((e) => {
            console.log(e);
          });
        });
      });
    }
  });
