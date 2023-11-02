declare global {
  type Theme = "dark-theme" | "light-theme";

  interface Window {
    __current_theme: Theme;
  }
}

export {};

const root = document.body;
let currentTheme: Theme = localStorage.getItem("theme") as Theme ?? document.body.classList.item(0) as Theme
  ?? "dark-theme";
const buttonList = document.querySelectorAll(".theme-switcher button");

function changeTheme(theme: Theme) {
  root.classList.remove(currentTheme);
  root.classList.add(theme);
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  for (let i = 0; i < buttonList.length; i++) {
    const btn = buttonList.item(i) as HTMLButtonElement;
    const btnTheme = btn.dataset.theme;
    if (btnTheme !== currentTheme) {
      btn.classList.remove("toggled");
    } else {
      btn.classList.add("toggled");
    }
  }

  window.__current_theme = theme;
  window.dispatchEvent(
    new CustomEvent("theme-change", {
      detail: { theme },
    }),
  );
}

root.classList.forEach((c) => {
  if (c.includes("theme")) {
    root.classList.remove(c);
  }
});
changeTheme(currentTheme);

for (let i = 0; i < buttonList.length; i++) {
  const btn = buttonList.item(i) as HTMLButtonElement;

  const theme = btn.dataset.theme as Theme | undefined;

  if (theme) {
    btn.addEventListener("click", () => {
      changeTheme(theme);
    });
  }
}
