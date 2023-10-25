import esbuild from "esbuild";
import path from "node:path";

export const Style = async (
  props:
    | { path: string; dirname: string; module?: never }
    | { path?: never; module: string },
) => {
  const options: esbuild.BuildOptions = {
    write: false,
    minify: true,
    platform: "browser",
  };

  if (props.path) {
    options.entryPoints = [path.join(props.dirname, props.path)];
  } else {
    options.entryPoints = [props.module!];
  }

  const result = await esbuild.build(options);

  if (result.errors.length > 0)
    throw new Error(result.errors[0]!.text);

  return <style>{result.outputFiles![0]!.text.trim()}</style>;
};
