const THEME_KEY = "aurora-theme";
const DEFAULT_THEME = "ocean";

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.themeBtn === theme ? "true" : "false");
  });
  localStorage.setItem(THEME_KEY, theme);
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  applyTheme(saved);

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
  });
}
