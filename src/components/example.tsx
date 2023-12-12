import { Button, Typography } from "adwavecss";
import { Style } from "../style";
import { cls } from "../utils/cls";
import { url } from "../utils/url";

export function Example(
  props: JSXTE.PropsWithChildren<{
    title: string;
  }>,
) {
  return (
    <div class="flexbox column">
      <Style
        dirname={__dirname}
        path="./example.css"
        inline
      />
      <h2 class={Typography.header}>{props.title}</h2>
      <div class="flexbox column align-center">{props.children}</div>
    </div>
  );
}

export function ExampleSection(
  props: JSXTE.PropsWithChildren<{
    description?: string;
    label?: string;
  }>,
) {
  const anchorID = props.label ? props.label.toLowerCase().replace(/\s/g, "-") : undefined;
  return (
    <div class="flexbox column card example-section">
      {props.label && (
        <h5
          id={anchorID}
          class={Typography.label}
        >
          <button
            title={"#" + anchorID}
            data-anchor={"#" + anchorID}
            class={cls("header-anchor", Button.button, Button.flat, Button.square)}
            onclick={/* js */ `
              const href = new window.URL(window.location.href);
              href.hash = this.dataset.anchor;
              navigator.clipboard.writeText(href.toString());
            `}
          >
            <img id="link-dark" src={url("assets/link-dark.svg")} />
            <img id="link-light" src={url("assets/link-light.svg")} />
          </button>
          <span>
            {props.label}
          </span>
        </h5>
      )}
      {props.description && <p class={Typography.text}>{props.description}</p>}
      <div class="flexbox extend example-section-content">{props.children}</div>
    </div>
  );
}
