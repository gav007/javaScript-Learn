// 03 - Colour Theme Picker
// Goal: react to dropdown changes and adjust CSS variables.

const themeSelect = document.querySelector("#themeSelect");
const themeMessage = document.querySelector("#themeMessage");

function setTheme(themeName) {
  // document.documentElement means the <html> element.
  // CSS variables live there in this project.

  if (themeName === "default") {
    document.documentElement.style.setProperty("--accent", "#2563eb");
    document.documentElement.style.setProperty("--surface", "#ffffff");
  } else if (themeName === "calm") {
    document.documentElement.style.setProperty("--accent", "#0f766e");
    document.documentElement.style.setProperty("--surface", "#ecfdf5");
  } else if (themeName === "sharp") {
    document.documentElement.style.setProperty("--accent", "#db2777");
    document.documentElement.style.setProperty("--surface", "#fff1f2");
  } else if (themeName === "dark") {
    document.documentElement.style.setProperty("--accent", "#8b5cf6");
    document.documentElement.style.setProperty("--surface", "#1f2937");
  }

  themeMessage.textContent = `Current theme: ${themeName}`;
}

themeSelect.addEventListener("change", function () {
  const selectedTheme = themeSelect.value;
  setTheme(selectedTheme);
});
