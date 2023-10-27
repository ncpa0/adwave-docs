import { ComponentApi } from "jsxte/dist/types/component-api/component-api";
import { Style } from "../style";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "code-sample": {
        type?: string;
      };
    }
  }
}

export function CodeSample(props: JSXTE.PropsWithChildren<{}>, componentApi: ComponentApi) {
  return (
    <div class="contents">
      <Style
        dirname={__dirname}
        path="./code-sample.css"
        inline
      />
      <div class="flexbox column code-sample-container">
        <div class="flexbox column code-sample">
          <h3 class="text">Example:</h3>
          <code-sample
            copy-clipboard-button
            type="lang-html"
          >
            <template preserve-content>{props.children}</template>
          </code-sample>
        </div>
        <div class="flexbox column code-sample-result">
          <h3 class="text">Result:</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
}
