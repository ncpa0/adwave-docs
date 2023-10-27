const root = document.querySelector("#root")!;
let currentTheme = localStorage.getItem("theme") ?? document.body.classList.item(0) ?? "dark-theme";
const buttonList = document.querySelectorAll(".theme-switcher button");

function changeTheme(theme: string) {
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
}

root.classList.forEach((c) => {
  if (c.includes("theme")) {
    root.classList.remove(c);
  }
});
changeTheme(currentTheme);

for (let i = 0; i < buttonList.length; i++) {
  const btn = buttonList.item(i) as HTMLButtonElement;

  const theme = btn.dataset.theme;

  if (theme) {
    btn.addEventListener("click", () => {
      changeTheme(theme);
    });
  }
}
