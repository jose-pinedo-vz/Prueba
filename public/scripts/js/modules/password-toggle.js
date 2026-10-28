export function initPasswordToggle() {
  const toggle = document.getElementById("togglePassword");
  const input = document.getElementById("password");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.className = isHidden ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
    toggle.setAttribute("aria-label", isHidden ? "Ocultar contraseña" : "Mostrar contraseña");
  });
}
