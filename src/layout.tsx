import { PluginBuild } from "esbuild";
import { Navbar } from "./components/navbar";
import { Script } from "./script";
import { Style } from "./style";

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
        package="@kuscamara/code-sample"
        buildOptions={buildOptions}
      />
    </>
  );
};

export function Layout(props: JSXTE.PropsWithChildren<{}>) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          http-equiv="x-ua-compatible"
          content="IE=edge"
        />
        <title>ADWave Docs</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <script
          src="https://unpkg.com/htmx.org@1.9.6"
          integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
          crossorigin="anonymous"
        ></script>
        <Style
          dirname={__dirname}
          path="./index.css"
        />
        <Style package="adwavecss/dist/styles.css" />
        <Style package="highlight.js/styles/default.css" />
        <Script package="adwaveui" />
        <CodeSampleScript />
      </head>
      <body>
        <div
          id="root"
          class="dark-theme box"
        >
          <div class="flexbox">
            <Navbar />
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
