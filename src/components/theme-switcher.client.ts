declare global {
  type Theme = "dark-theme" | "light-theme";

  interface Window {
    __current_theme: Theme;
  }
}

export {};

class PersistentStorage {
  private static THEME_KEY = "theme";

  public static getTheme() {
    const localStorageTheme = localStorage.getItem(this.THEME_KEY) as
      | Theme
      | null;
    if (localStorageTheme) {
      return localStorageTheme;
    }
  }

  public static setTheme(theme: Theme) {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}

function getCurrentTheme(): Theme {
  const theme = Array.from(document.body.classList.values()).find(c =>
    c.endsWith("theme")
  );
  if (theme) {
    return theme as Theme;
  }

  return "dark-theme";
}

function changeTheme(theme: Theme) {
  root.classList.remove(currentTheme);
  root.classList.add(theme);
  currentTheme = theme;
  PersistentStorage.setTheme(theme);
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
const initialTheme = PersistentStorage.getTheme() ?? currentTheme;
const buttonList = document.querySelectorAll(".theme-switcher button");

changeTheme(initialTheme);

for (let i = 0; i < buttonList.length; i++) {
  const btn = buttonList.item(i) as HTMLButtonElement;

  const theme = btn.dataset.theme as Theme | undefined;

  if (theme) {
    btn.addEventListener("click", () => {
      changeTheme(theme);
    });
  }
}
