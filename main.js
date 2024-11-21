// Hämta nödvändiga element som behövs för att hantera mörkt läge och SVG-bilder
const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

// Identifiera SVG-bilder som ska uppdateras beroende på om mörkt eller ljust läge används
const handwrittenImageIndex = document.querySelector('.hero img[src*="handwritten_1.svg"]');
const handwrittenImageGuides = document.querySelector('.guide-header img[src*="handwritten_2.svg"]');

// Funktion för att byta ut bilderna baserat på om mörkt läge är aktiverat
const updateHandwrittenImages = (isDarkMode) => {
    if (isDarkMode) {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1_dm.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2_dm.svg";
    } else {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2.svg";
    }
};

// Kontrollera och tillämpa sparat tema från localStorage när sidan laddas
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/moon.svg"; 
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk";
    updateHandwrittenImages(true);
} else {
    body.classList.remove("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/sun.svg";
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus";
    updateHandwrittenImages(false);
}

// Lägg till händelsehanterare för att användaren ska kunna växla mellan mörkt och ljust läge
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");

        if (isDarkMode) {
            if (toggleIcon) toggleIcon.src = "icons/moon.svg";
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk";
        } else {
            if (toggleIcon) toggleIcon.src = "icons/sun.svg";
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus";
        }

        updateHandwrittenImages(isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    });
} else {
    console.error("Mörkt läge-knappen hittades inte.");
}

