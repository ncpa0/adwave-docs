import { Box, Theme } from "adwavecss";
import { GithubBadge } from "./components/gh-badge";
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
    description?: string;
  }>,
) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.description && (
          <meta name="description" content={props.description} />
        )}
        <title>
          {props.title ? `ADWave Docs - ${props.title}` : "ADWave Docs"}
        </title>
        <PreloadFont link="https://fonts.gstatic.com/s/notosans/v36/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99d.ttf" />
        <PreloadFont link="https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejYHtGyI.ttf" />
        <PreloadFont link="https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoC1CzTtw.ttf" />
        <PreloadFont link="https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf" />
        <Style dirname={__dirname} path="./index.css" />
        <Script package="adwaveui" type="iife" />
        <Script dirname={__dirname} path="./htmx.ts" type="iife" />
        <Script
          dirname={__dirname}
          path="./index.client.ts"
          type="iife"
          defer
          buildOptions={{
            define: {
              SERVICE_WORKERS: JSON.stringify([url("request-cache.sw.js")]),
            },
            loader: {
              ".css": "text",
            },
          }}
        />
      </head>
      <body hx-ext="preload,merge-meta" class={cls(Box.box, Theme.dark)}>
        <div id="root" class={Box.box}>
          <div class="flexbox navbar-container">
            <Navbar activePage={props.activePage} />
          </div>
          <div id="example-view" class="flexbox">
            {props.children}
          </div>
          <GithubBadge />
        </div>
        {__DEV__ && (
          <script defer>
            {/* js */ `
            let timeout;
            HMR.onChange(() => {
              clearTimeout(timeout);
              timeout = setTimeout(() => {
                window.location.reload();
              }, 2500);
            })`}
          </script>
        )}
      </body>
    </html>
  );
}

function PreloadFont(props: { link: string }) {
  return (
    <>
      <link rel="preload" href={props.link} as="font" />
    </>
  );
}
