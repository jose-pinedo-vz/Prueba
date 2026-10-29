// Usuarios predeterminados para la prueba de login
const USERS = [
  { username: "admin", password: "admin123", name: "Admin" },
  { username: "usuario1", password: "clave123", name: "Usuario 1" },
  { username: "demo", password: "demo123", name: "Invitado" },
];

function triggerShake(el) {
  el.classList.remove("animate-shake");
  void el.offsetWidth; // fuerza reflow para poder repetir la animación
  el.classList.add("animate-shake");
}

function showError(message) {
  const errorEl = document.getElementById("formError");
  document.getElementById("formErrorText").textContent = message;
  errorEl.hidden = false;
  triggerShake(errorEl);
}

function clearError() {
  const errorEl = document.getElementById("formError");
  errorEl.hidden = true;
  errorEl.classList.remove("animate-shake");
}

export function initLoginForm() {
  const form = document.getElementById("loginForm");

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

    // Guardar usuario en localStorage y redirigir al dashboard
    localStorage.setItem("aurora-user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  });
}
