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

// Theme Management (Dark / Light)
function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", theme);
  
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateIcons(theme);
}

function updateIcons(theme) {
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (!darkIcon || !lightIcon) return;

  if (theme === "dark") {
    // In dark mode, show sun icon (to switch to light)
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    // In light mode, show moon icon (to switch to dark)
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
}

// Apply initial theme immediately to prevent flashing
applyTheme(getInitialTheme());

// When DOM is fully ready, sync icons and bind toggle button
document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const newTheme = isCurrentlyDark ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  // Interactive Spotlight effect on cards
  const spotlightCards = document.querySelectorAll(".spotlight-card");
  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
