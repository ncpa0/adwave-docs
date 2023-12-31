import { Button, Input } from "adwavecss";
import { Script } from "../script";
import { cls } from "../utils/cls";

export const FontSizeSelector = () => {
  return (
    <>
      <div
        is="font-size-selector"
        class={cls("flexbox", "font-size-selector", Input.linked)}
      >
        <button
          id="btn-decrease"
          class={Button.button}
          title="Decrease page font size"
        >
          -
        </button>
        <input
          class={Input.input}
          value="20px"
          disabled
          title="Page font size"
        />
        <button
          class={Button.button}
          title="Increase page font size"
          id="btn-increase"
        >
          +
        </button>
      </div>
      <Script
        dirname={__dirname}
        path="./font-size-selector.client.ts"
      />
    </>
  );
};
