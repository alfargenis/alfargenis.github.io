// Typing Effect for username
document.addEventListener("DOMContentLoaded", function () {
  const textDynamic = document.getElementById("text-dynamic");
  if (!textDynamic) return;

  const text = textDynamic.getAttribute("data-value") || "@alfargenis";
  let index = 0;
  textDynamic.textContent = "";

  function typeWriter() {
    if (index < text.length) {
      textDynamic.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 110);
    }
  }

  // Slight delay before starting typewriter
  setTimeout(typeWriter, 300);
});

// DaisyUI & Tailwind Theme Toggle (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let currentTheme;
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = systemPrefersDark ? "dark" : "light";
  }

  applyTheme(currentTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");

  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (darkIcon && lightIcon) {
    if (theme === "dark") {
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    } else {
      darkIcon.classList.remove("hidden");
      lightIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    }
  }
}

// Initialize theme on page load
initTheme();

// Theme toggle button click handler
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }
});
