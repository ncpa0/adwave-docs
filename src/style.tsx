import esbuild from "esbuild";
import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import path from "node:path";
import process from "node:process";
import EFC from "scripts/external-files-context";
import { url } from "./utils/url";

const IS_DEV = process.argv.includes("--dev");

export const Style = async (
  props:
    | {
        path: string;
        dirname: string;
        package?: never;
        inline?: boolean;
      }
    | {
        path?: never;
        package: string;
        inline?: boolean;
      },
  componentApi: ComponentApi,
) => {
  const options: esbuild.BuildOptions = {
    write: false,
    minify: !IS_DEV,
    keepNames: true,
    platform: "browser",
  };

  if (props.path) {
    options.entryPoints = [path.join(props.dirname, props.path)];
  } else {
    options.entryPoints = [props.package!];
  }

  const result = await esbuild.build(options);

  if (result.errors.length > 0) throw new Error(result.errors[0]!.text);

  const contents = `/* ${options.entryPoints[0]} */\n${result.outputFiles![0]!.text.trim()}`;

  if (props.inline) {
    return <style>{contents}</style>;
  }

  const extFiles = componentApi.ctx.getOrFail(EFC.ExtFilesCtx);
  const src = extFiles.register(contents, props.package ?? path.basename(props.path), "css");

  return (
    <link
      rel="stylesheet"
      href={url(src)}
      type="text/css"
      media="screen"
    />
  );
};
