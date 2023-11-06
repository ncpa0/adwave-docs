declare global {
  type Theme = "dark-theme" | "light-theme";

  interface Window {
    __current_theme: Theme;
  }
}

export {};

function getCurrentTheme(): Theme {
  const localStorageTheme = localStorage.getItem("theme") as Theme | null;
  if (localStorageTheme) {
    return localStorageTheme;
  }

  const theme = Array.from(document.body.classList.values()).find(c => c.endsWith("theme"));
  if (theme) {
    return theme as Theme;
  }

  return "dark-theme";
}

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

const root = document.body;
let currentTheme = getCurrentTheme();
const buttonList = document.querySelectorAll(".theme-switcher button");

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
