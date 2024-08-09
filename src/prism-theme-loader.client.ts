// @ts-expect-error
import themeLight from "prismjs/themes/prism-coy.css";
// @ts-expect-error
import themeDark from "prismjs/themes/prism-tomorrow.css";

const darkCustomCss = /* css */ `
.code-sample code {
  font-size: 0.9em;
  --clr-text: #ccc;
}
`;

const lightCustomCss = /* css */ `
.code-sample code {
  font-size: 0.9em;
  --clr-text: black;
}
`;

const styleElem = document.createElement("style");
document.head.appendChild(styleElem);

function onThemeChange(theme: "dark-theme" | "light-theme") {
  switch (theme) {
    case "dark-theme":
      styleElem.innerHTML = `${themeDark}${darkCustomCss}`;
      break;
    case "light-theme":
      styleElem.innerHTML = `${themeLight}${lightCustomCss}`;
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
