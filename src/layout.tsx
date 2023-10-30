import { Box, Theme } from "adwavecss";
import { PluginBuild } from "esbuild";
import { Navbar } from "./components/navbar";
import { Script } from "./script";
import { Style } from "./style";
import { cls } from "./utils/cls";

declare global {
  namespace JSXTE {
    interface BaseHTMLTagProps {
      preload?: string;
    }
  }
}

const CodeSampleScript = () => {
  const replaceHljsPlugin = {
    name: "replaceHljsPlugin",
    setup(build: PluginBuild) {
      build.onLoad({ filter: new RegExp(/.+highlight\.pack\.js/) }, () => {
        return {
          contents: "",
        };
      });
    },
  };

  const buildOptions = {
    define: {
      "hljs.highlightBlock": "HighlightJS.highlightElement",
      hljs: "HighlightJS",
    },
    plugins: [replaceHljsPlugin],
  };

  return (
    <>
      <Script
        package="highlight.js"
        type="global"
      />
      <Script
        dirname={__dirname}
        path="./components/code-sample.client.ts"
        type="iife"
      />
      {
        /* <Script
        package="@kuscamara/code-sample"
        buildOptions={buildOptions}
      /> */
      }
    </>
  );
};

export function Layout(
  props: JSXTE.PropsWithChildren<{
    title?: string;
    activePage?: string;
  }>,
) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          http-equiv="x-ua-compatible"
          content="IE=edge"
        />
        <title>{props.title ? `ADWave Docs - ${props.title}` : "ADWave Docs"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <script
          src="https://unpkg.com/htmx.org@1.9.6"
          integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
          crossorigin="anonymous"
        >
        </script>
        <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
        <Style
          dirname={__dirname}
          path="./index.css"
        />
        <Style package="adwavecss/dist/styles.css" />
        <Style package="highlight.js/styles/an-old-hope.css" />
        <Script package="adwaveui" />
        <CodeSampleScript />
      </head>
      <body hx-ext="preload">
        <div
          id="root"
          class={cls(Box.box, Theme.dark)}
        >
          <div class="flexbox">
            <Navbar activePage={props.activePage} />
          </div>
          <div
            id="example-view"
            class="flexbox"
          >
            {props.children}
          </div>
        </div>
      </body>
    </html>
  );
}
