// Hämta nödvändiga element
const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;
const handwrittenImage = document.querySelector('.hero img[src*="handwritten_1.svg"]'); // Select the SVG

// Kontrollera om elementen hittas
if (darkModeToggle && toggleIcon && body && handwrittenImage) {
  console.log("Alla element hittades.");

  // Lägg till event-lyssnare
  darkModeToggle.addEventListener("click", () => {
    // Växla dark-mode på body
    body.classList.toggle("dark-mode");

    // Uppdatera ikon och text baserat på läge
    if (body.classList.contains("dark-mode")) {
      toggleIcon.src = "icons/moon.svg"; // Moon icon for Dark Mode
      darkModeToggle.querySelector("span").innerText = "Dark";
      handwrittenImage.src = "other/handwritten_1_dm.svg"; // Dark Mode version of handwritten
      console.log("Aktiverat mörkt läge och bytt till handwritten_1_dm.svg.");
    } else {
      toggleIcon.src = "icons/sun.svg"; // Sun icon for Light Mode
      darkModeToggle.querySelector("span").innerText = "Light";
      handwrittenImage.src = "other/handwritten_1.svg"; // Light Mode version of handwritten
      console.log("Aktiverat ljust läge och bytt till handwritten_1.svg.");
    }
  });
} else {
  console.error("Ett eller flera element kunde inte hittas.");
}