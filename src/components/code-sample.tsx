import { Typography } from "adwavecss";
import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import prettier from "prettier";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "code-sample": {
        type?: string;
      };
    }
  }
}

export async function CodeSample(props: JSXTE.PropsWithChildren<{}>, componentApi: ComponentApi) {
  const asString = componentApi.render(<>{props.children}</>, { pretty: true });
  const formatted = (await prettier.format(asString, {
    parser: "html",
    tabWidth: 4,
    bracketSameLine: false,
    printWidth: 80,
  })).replace(/(\s+)></g, ">$1<").replace(/(\s+)>(\w)/g, ">$1$2");
  const sanitized = formatted
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/=""/g, "")
    .replace(/=&gt;/g, "=>")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return (
    <div class="contents">
      <div class="flexbox column code-sample-container">
        <div class="flexbox column code-sample">
          <h3 class={Typography.text}>Example:</h3>
          <div is="code-sample">
            <pre>{`<code class="html language-html frame">${sanitized}</code>`}</pre>
          </div>
        </div>
        <div class="flexbox column code-sample-result">
          <h3 class={Typography.text}>Result:</h3>
          <div class="flexbox column result-content">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
