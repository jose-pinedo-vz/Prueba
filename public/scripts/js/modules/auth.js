// Usuarios predeterminados para la prueba de login
const USERS = [
  { username: "admin", password: "admin123", name: "Admin" },
  { username: "usuario1", password: "clave123", name: "Usuario 1" },
  { username: "demo", password: "demo123", name: "Invitado" },
];

function showError(message) {
  const errorEl = document.getElementById("formError");
  errorEl.textContent = message;
  errorEl.hidden = false;

  const card = document.querySelector("#loginForm").closest("div.flex-1");
  card.classList.remove("shake");
  requestAnimationFrame(() => card.classList.add("shake"));
}

function clearError() {
  const errorEl = document.getElementById("formError");
  errorEl.hidden = true;
  errorEl.textContent = "";
}

export function initLoginForm() {
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
