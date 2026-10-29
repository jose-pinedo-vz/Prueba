import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar sistema de temas
  initTheme();

  // Mostrar nombre del usuario logueado
  const userStr = localStorage.getItem("aurora-user");
  if (userStr) {
    const user = JSON.parse(userStr);
    const userNameEl = document.getElementById("userName");
    if (userNameEl && user.name) {
      userNameEl.textContent = user.name;
    }
  } else {
    // Si no hay usuario logueado, redirigir al login
    window.location.href = "index.html";
  }

  // Manejar logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("aurora-user");
      window.location.href = "index.html";
    });
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animaciones de entrada para secciones
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    observer.observe(section);
  });
});
