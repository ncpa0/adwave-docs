const fs = require("fs");
const { walk } = require("node-os-walk");
const path = require("path");
const { buildTemplate } = require("./tmpl-builder.cjs");
const { buildServiceWorkers } = require("./build-service-workers.cjs");
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
    await rimraf.rimraf(outDir);
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

  const assetsDir = path.join(outDir, "assets");
  const jsDir = path.join(assetsDir, "js");
  const cssDir = path.join(assetsDir, "css");

  await fs.promises.mkdir(assetsDir, { recursive: true });
  await fs.promises.mkdir(jsDir, { recursive: true });
  await fs.promises.mkdir(cssDir, { recursive: true });

  await Promise.all([
    ...templates.map((tmpl) => {
      return buildTemplate(tmpl, outDir);
    }),
    buildServiceWorkers(outDir),
    fs.promises.cp(p("src/assets"), assetsDir, { recursive: true }),
  ]);
}

async function startServer() {
  const { serve } = await import("@ncpa0cpl/goserve");

  const proc = serve(p("docs"), {
    watch: true,
    spa: "index.html",
    cacheHeaders: {
      nocache: true,
    },
    port: "8080",
  });

  console.log("Server started at http://localhost:8080");

  process.on("exit", () => {
    proc.kill();
  });
}

const watch = process.argv.includes("--watch");
const shouldServe = process.argv.includes("--serve");

build()
  .catch((e) => {
    console.error(e);
    if (!watch) process.exit(1);
  })
  .finally(() => {
    if (shouldServe) {
      startServer();
    }

    if (watch) {
      const buildQueue = new Queue(1);

      const chokidar = require("chokidar");

      chokidar
        .watch(p("src"), {
          alwaysStat: false,
          ignoreInitial: true,
          useFsEvents: true,
        })
        .on("all", (ev, fPath, stats) => {
          if (ev === "addDir") return;

          if (
            fPath.includes("src/assets")
            && !fPath.includes("src/assets/js")
            && !fPath.includes("src/assets/css")
          ) {
            console.log(
              `Asset changed, copying (${path.relative(p("."), fPath)})`,
            );
            const rel = path.relative(p("src/assets"), fPath);
            fs.promises
              .cp(fPath, path.join(p("docs/assets"), rel), {
                recursive: true,
              })
              .catch((e) => {
                console.error(e);
              });
            return;
          }

          console.log(
            `File changed, recompiling (${path.relative(p("."), fPath)})`,
          );

          buildQueue.run(async () => {
            await build().catch((e) => {
              console.log(e);
            });
          });
        });
    }
  });
