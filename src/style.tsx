import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import { bundleAsync, TransformResult } from "lightningcss";
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
  let name = "";
  let filepath = "";

  if (props.path) {
    filepath = path.resolve(props.dirname, props.path);
    name = props.path;
  } else {
    filepath = require.resolve(props.package!);
    name = props.package!;
  }

  let result: TransformResult;
  try {
    result = await bundleAsync({
      filename: filepath,
      minify: !IS_DEV,
      resolver: {
        resolve: (specifier, from) => {
          if (
            specifier.startsWith(
              "https://fonts.googleapis.com/css2?family=Noto+Sans",
            )
          ) {
            return path.resolve(__dirname, "./assets/noto-sans.css");
          }
          return path.join(path.dirname(from), specifier);
        },
      },
    });
  } catch (err) {
    console.error("css build failed", err);
    return <></>;
  }

  const contents = `/* ${name} */\n${result.code}`;

  if (props.inline) {
    return <style>{contents}</style>;
  }

  const extFiles = componentApi.ctx.getOrFail(EFC.ExtFilesCtx);
  const src = extFiles.register(
    contents,
    props.package ?? path.basename(props.path),
    "css",
  );

  return (
    <link rel="stylesheet" href={url(src)} type="text/css" media="screen" />
  );
};
