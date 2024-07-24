import { Box, Theme } from "adwavecss";
import { Navbar } from "./components/navbar";
import { Script } from "./script";
import { Style } from "./style";
import { cls } from "./utils/cls";
import { url } from "./utils/url";

declare global {
  namespace JSXTE {
    interface BaseHTMLTagProps {
      preload?: string;
    }
  }
}

const __DEV__ = process.env.NODE_ENV === "development";

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
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>
          {props.title ? `ADWave Docs - ${props.title}` : "ADWave Docs"}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Style
          dirname={__dirname}
          path="../node_modules/adwavecss/dist/styles.css"
        />
        <Style dirname={__dirname} path="./index.css" />
        <Style dirname={__dirname} path="./components/code-sample.css" />
        <Style dirname={__dirname} path="./components/example.css" />
        <Style dirname={__dirname} path="./components/font-size-selector.css" />
        <Style dirname={__dirname} path="./components/navbar.css" />
        <Style dirname={__dirname} path="./components/theme-switcher.css" />
        <Script
          dirname={__dirname}
          path="./service-workers/register.client.ts"
          type="iife"
          buildOptions={{
            define: {
              SERVICE_WORKERS: JSON.stringify([url("request-cache.sw.js")]),
            },
          }}
        />
        <Script
          dirname={__dirname}
          path="./hljs-theme-loader.client.ts"
          type="iife"
          buildOptions={{
            loader: {
              ".css": "text",
            },
          }}
        />
        <Script
          dirname={__dirname}
          path="./components/code-sample.client.ts"
          type="iife"
        />
        <Script package="highlight.js" type="global" />
        <Script package="adwaveui" type="iife" />
        <Script dirname={__dirname} path="./htmx.ts" type="iife" />
      </head>
      <body hx-ext="preload" class={cls(Box.box, Theme.dark)}>
        <div id="root" class={Box.box}>
          <div class="flexbox navbar-container">
            <Navbar activePage={props.activePage} />
          </div>
          <div id="example-view" class="flexbox">
            {props.children}
          </div>
        </div>
        {__DEV__ && (
          <script defer>
            {
              /* js */ `
            let timeout;
            HMR.onChange(() => {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                window.location.reload();
              }, 2500);
            })`
            }
          </script>
        )}
      </body>
    </html>
  );
}
