import { Typography } from "adwavecss";
import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import prettier from "prettier";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index";
loadLanguages(["html", "css", "javascript"]);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "code-sample": {
        type?: string;
      };
    }
  }
}

async function prettifyHtml(html: string) {
  let prettierHtml = await prettier.format(html, {
    parser: "html",
    tabWidth: 4,
    bracketSameLine: false,
    printWidth: 80,
  });
  prettierHtml = prettierHtml.replace(/(\s+)></g, ">$1<");
  prettierHtml = prettierHtml.replace(/(\s+)>(\w)/g, ">$1$2");
  const lines = prettierHtml.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    lines[i] = line.replace(
      /^(\s+)(.+?<\/.+?>)\s+(<\/.+?>)/g,
      (_, padding, lineContent, closeTag) => {
        const lowerPadd = padding.slice(0, -4);
        return `${padding}${lineContent}\n${lowerPadd}${closeTag}`;
      },
    );
  }

  return lines.join("\n");
}

export async function CodeSample(
  props: JSXTE.PropsWithChildren<{}>,
  componentApi: ComponentApi,
) {
  const formatted = await prettifyHtml(
    componentApi.render(<>{props.children}</>, { pretty: true }),
  );

  const highlightedHtml = Prism.highlight(
    formatted,
    Prism.languages.html!,
    "html",
  );

  return (
    <div class="contents">
      <div class="flexbox column code-sample-container">
        <div class="flexbox column code-sample">
          <h3 class={Typography.text}>Example:</h3>
          <pre>
            <code class="language-html">
              {highlightedHtml}
            </code>
          </pre>
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
