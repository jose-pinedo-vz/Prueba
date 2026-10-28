import { initTheme } from "./modules/theme.js";
import { initPasswordToggle } from "./modules/password-toggle.js";
import { initLoginForm } from "./modules/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPasswordToggle();
  initLoginForm();
});
