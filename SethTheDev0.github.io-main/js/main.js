// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");
let isAnimating = false;

// Load saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

// Toggle theme on click. Allow theme to change every click, but debounce the bulb tween.
// Block repeat toggles for a short cooldown so theme can't be spammed.
toggleButton.addEventListener("click", () => {
  if (isAnimating) return; // ignore clicks during cooldown
  isAnimating = true;

  // Switch theme
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Play click-scale tween
  toggleIcon.classList.add("scale-once");

  // Remove the class and lift cooldown after the tween+buffer (600ms)
  setTimeout(() => {
    toggleIcon.classList.remove("scale-once");
    isAnimating = false;
  }, 100);
});
