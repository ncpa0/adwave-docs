import { Typography } from "adwavecss";
import { Style } from "../style";

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
      <div class="flexbox column">{props.children}</div>
    </div>
  );
}

export function ExampleSection(
  props: JSXTE.PropsWithChildren<{
    description?: string;
    label?: string;
  }>,
) {
  return (
    <div class="flexbox column card example-section">
      {props.label && <p class={Typography.label}>{props.label}</p>}
      {props.description && <p class={Typography.text}>{props.description}</p>}
      <div class="flexbox extend">{props.children}</div>
    </div>
  );
}
