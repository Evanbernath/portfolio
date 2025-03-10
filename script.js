const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  let stylesheet = document.getElementById("themeStylesheet");
  let currentTheme =
    stylesheet.getAttribute("href") === "lightMode.css"
      ? "darkMode.css"
      : "lightMode.css";

  // Apply new theme
  stylesheet.setAttribute("href", currentTheme);

  // Save theme preference to localStorage
  localStorage.setItem("selectedTheme", currentTheme);
});

// Apply saved theme when the page loads
window.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("selectedTheme") || "lightMode.css";
  document.getElementById("themeStylesheet").setAttribute("href", savedTheme);
});
