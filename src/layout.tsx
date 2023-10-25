import { Navbar } from "./components/navbar";
import { Script } from "./script";
import { Style } from "./style";

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
          path="./templates/index.css"
        />
        <Style module="adwavecss/dist/styles.css" />
        <Script module="adwaveui" />
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
