import { Button, Input } from "adwavecss";
import { Script } from "../script";
import { cls } from "../utils/cls";

export function ThemeSwitcher() {
  return (
    <>
      <div class={cls(Input.linked, "flexbox theme-switcher")}>
        <button
          class={cls(Button.button, Button.toggled)}
          data-theme="dark-theme"
        >
          Dark Theme
        </button>
        <button
          class={Button.button}
          data-theme="light-theme"
        >
          Light Theme
        </button>
      </div>
      <Script
        dirname={__dirname}
        path="./theme-switcher.client.ts"
        type="iife"
      />
    </>
  );
}
