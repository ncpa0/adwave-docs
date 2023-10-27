import { Script } from "../script";
import { Style } from "../style";

export function ThemeSwitcher() {
  return (
    <>
      <Style
        dirname={__dirname}
        path="./theme-switcher.css"
        inline
      />
      <div class="flexbox linked theme-switcher">
        <button
          class="btn toggled"
          data-theme="dark-theme"
        >
          Dark Theme
        </button>
        <button
          class="btn"
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
