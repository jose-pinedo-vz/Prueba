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

// Transición fade + slide entre el formulario y el panel de éxito.
function fadeOut(el, onDone) {
  el.classList.add("opacity-0", "-translate-y-2");
  setTimeout(() => {
    el.hidden = true;
    onDone?.();
  }, 300);
}

function fadeIn(el) {
  el.hidden = false;
  el.classList.add("opacity-0", "translate-y-2");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.remove("opacity-0", "-translate-y-2", "translate-y-2");
    });
  });
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

    fadeOut(form, () => {
      successName.textContent = user.name;
      fadeIn(successPanel);
    });
  });

  logoutBtn.addEventListener("click", () => {
    fadeOut(successPanel, () => {
      form.reset();
      fadeIn(form);
    });
  });
}
