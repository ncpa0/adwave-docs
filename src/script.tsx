import esbuild from "esbuild";
import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import path from "node:path";
import process from "node:process";
import EFC from "scripts/external-files-context";

const IS_DEV = process.argv.includes("--dev");

function padLines(str: string, pad: string) {
  return str
    .split("\n")
    .map((line) => `${pad}${line}`)
    .join("\n");
}

function cjsToGlobal(cjs: string) {
  return /* js */ `
(function() {
  const __exports = new Proxy(window, {
    get(_global, key) {
      return _global[key];
    },
    set(_global, key, value) {
      if(key ==="default" || key ==="__esModule") return;
      Object.defineProperty(_global, key, {
        writable: true,
        enumerable: false,
        configurable: false,
        get() {}
      });
    }
  })

  const module = {
    get exports() {
      return __exports;
    },
    set exports(value) {
      const props = Object.getOwnPropertyDescriptors(value);
      for(const [key, descriptor] of Object.entries(props)) {
        Object.defineProperty(window, key, {
          ...descriptor,
          enumerable: false,
        });
      }
    }
  }

${padLines(cjs, "  ")}
})();
  `.trim();
}

type ScriptPropsBase = {
  /**
   * When module, it will be bundled into an ESM format and imported using the script tag with a
   * `module` type.
   *
   * When iife, it will be bundled into an IIFE format and imported using the script tag with a
   * `text/javascript` type.
   *
   * When global, it will be bundled into a CJS format, ran as IIFE and all exports will be assigned
   * to the global object.
   */
  type?: "module" | "iife" | "global";
  onLoad?: (contents: string) => string | undefined;
  buildOptions?: esbuild.BuildOptions;
};

export type ScriptProps = ScriptPropsBase &
  (
    | {
        path: string;
        dirname: string;
        package?: never;
      }
    | {
        path?: never;
        package: string;
      }
  );

export const Script = async (props: ScriptProps, componentApi: ComponentApi) => {
  const { type = "module", onLoad = () => {}, buildOptions = {} } = props;

  const options: esbuild.BuildOptions = {
    target: "es6",
    minify: !IS_DEV,
    keepNames: true,
    bundle: true,
    write: false,
    treeShaking: true,
    ...buildOptions,
    platform: "browser",
    format: (() => {
      switch (type) {
        case "module":
          return "esm";
        case "iife":
          return "iife";
        case "global":
          return "cjs";
      }
    })(),
  };

  if (props.path) {
    options.entryPoints = [path.join(props.dirname, props.path)];
  } else {
    options.entryPoints = [props.package!];
  }

  const result = await esbuild.build(options);

  if (result.errors.length > 0) throw new Error(result.errors[0]!.text);

  let contents = result.outputFiles![0]!.text.trim();

  const tmp = onLoad(contents);
  if (tmp) {
    contents = tmp;
  }

  if (type === "global") {
    contents = cjsToGlobal(contents);
  }

  contents = `/* ${options.entryPoints[0]} */\n${contents}`;

  const extFiles = componentApi.ctx.getOrFail(EFC.ExtFilesCtx);
  const src = extFiles.register(contents, props.package ?? path.basename(props.path), "js");

  return (
    <script
      type={type === "module" ? "module" : "text/javascript"}
      src={src}
    />
  );
};
