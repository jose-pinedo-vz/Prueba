// Usuarios predeterminados para la prueba de login
const USERS = [
  { username: "admin", password: "admin123", name: "Admin" },
  { username: "usuario1", password: "clave123", name: "Usuario 1" },
  { username: "demo", password: "demo123", name: "Invitado" },
];

const THEME_KEY = "aurora-theme";

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.themeBtn === theme ? "true" : "false");
  });
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "ocean";
  applyTheme(saved);

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
  });
}

function initPasswordToggle() {
  const toggle = document.getElementById("togglePassword");
  const input = document.getElementById("password");

  toggle.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "🙈" : "👁";
    toggle.setAttribute("aria-label", isHidden ? "Ocultar contraseña" : "Mostrar contraseña");
  });
}

function showError(message) {
  const errorEl = document.getElementById("formError");
  errorEl.textContent = message;
  errorEl.hidden = false;

  const card = document.querySelector(".auth__card");
  card.classList.remove("shake");
  requestAnimationFrame(() => card.classList.add("shake"));
}

function clearError() {
  const errorEl = document.getElementById("formError");
  errorEl.hidden = true;
  errorEl.textContent = "";
}

function initLoginForm() {
  const form = document.getElementById("loginForm");
  const successPanel = document.getElementById("successPanel");
  const successName = document.getElementById("successName");
  const logoutBtn = document.getElementById("logoutBtn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearError();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      showError("Por favor completa usuario y contraseña.");
      return;
    }

    const user = USERS.find((u) => u.username === username && u.password === password);

    if (!user) {
      showError("Usuario o contraseña incorrectos.");
      return;
    }

    form.hidden = true;
    successName.textContent = user.name;
    successPanel.hidden = false;
  });

  logoutBtn.addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    successPanel.hidden = true;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPasswordToggle();
  initLoginForm();
});
