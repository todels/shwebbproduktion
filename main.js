// Get necessary elements
const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;
const handwrittenImage = document.querySelector('.hero img[src*="handwritten_1.svg"]'); // Select the SVG if it exists

// Check for dark mode state in localStorage and apply it on page load
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
  if (toggleIcon) toggleIcon.src = "icons/moon.svg"; // Moon icon for Dark Mode
  if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Dark";
  if (handwrittenImage) {
    handwrittenImage.src = "other/handwritten_1_dm.svg"; // Dark Mode version of handwritten
  }
} else {
  body.classList.remove("dark-mode");
  if (toggleIcon) toggleIcon.src = "icons/sun.svg"; // Sun icon for Light Mode
  if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Light";
  if (handwrittenImage) {
    handwrittenImage.src = "other/handwritten_1.svg"; // Light Mode version of handwritten
  }
}

// Add event listener to toggle button
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");

    // Update icons and text
    if (isDarkMode) {
      if (toggleIcon) toggleIcon.src = "icons/moon.svg";
      if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Dark";
      if (handwrittenImage) {
        handwrittenImage.src = "other/handwritten_1_dm.svg"; // Dark Mode version of handwritten
      }
    } else {
      if (toggleIcon) toggleIcon.src = "icons/sun.svg";
      if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Light";
      if (handwrittenImage) {
        handwrittenImage.src = "other/handwritten_1.svg"; // Light Mode version of handwritten
      }
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", isDarkMode);
  });
} else {
  console.error("Dark mode toggle button not found.");
}
