// @ts-expect-error
import hljsThemeLight from "highlight.js/styles/intellij-light.css";
// @ts-expect-error
import hljsThemeDark from "highlight.js/styles/an-old-hope.css";

const darkCustomCss = /* css */ `
.code-sample code {
  font-size: 0.7em;
  --clr-text: #f9cfff;
}
`;

const lightCustomCss = /* css */ `
.code-sample code {
  font-size: 0.7em;
  --clr-text: #373737;
}
`;

const styleElem = document.createElement("style");
document.head.appendChild(styleElem);

function onThemeChange(theme: "dark-theme" | "light-theme") {
  switch (theme) {
    case "dark-theme":
      styleElem.innerHTML = `${hljsThemeDark}${darkCustomCss}`;
      break;
    case "light-theme":
      styleElem.innerHTML = `${hljsThemeLight}${lightCustomCss}`;
      break;
  }
}

window.addEventListener("theme-change", (e) => {
  const event = e as CustomEvent<{ theme: "dark-theme" | "light-theme" }>;
  onThemeChange(event.detail.theme);
});

if (window.__current_theme != null) {
  onThemeChange(window.__current_theme);
}
