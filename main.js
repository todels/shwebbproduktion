// Hämtar element vi behöver för att hantera mörkt läge och uppdatera bilder
const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

// Letar upp SVG-bilderna som behöver ändras beroende på vilket tema som används
const handwrittenImageIndex = document.querySelector('.hero img[src*="handwritten_1.svg"]');
const handwrittenImageGuides = document.querySelector('.guide-header img[src*="handwritten_2.svg"]');

// Funktion som byter ut bilderna baserat på om det är mörkt eller ljust läge
const updateHandwrittenImages = (isDarkMode) => {
    if (isDarkMode) {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1_dm.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2_dm.svg";
    } else {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2.svg";
    }
};

// Kollar om mörkt läge redan är sparat i localStorage och sätter rätt tema vid sidladdning
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/moon.svg"; // Visar månikonen för mörkt läge
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk"; // Ändrar texten på knappen
    updateHandwrittenImages(true); // Byter till mörka versioner av bilderna
} else {
    body.classList.remove("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/sun.svg"; // Visar solikonen för ljust läge
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus"; // Ändrar texten på knappen
    updateHandwrittenImages(false); // Byter tillbaka till ljusa bilder
}

// Lägger till en klickhändelse på knappen för att växla mellan mörkt och ljust läge
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");

        // Uppdaterar ikon och text baserat på det valda temat
        if (isDarkMode) {
            if (toggleIcon) toggleIcon.src = "icons/moon.svg"; // Månikonen för mörkt läge
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk";
        } else {
            if (toggleIcon) toggleIcon.src = "icons/sun.svg"; // Solikonen för ljust läge
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus";
        }

        updateHandwrittenImages(isDarkMode); // Byter ut bilderna till rätt tema
        localStorage.setItem("darkMode", isDarkMode); // Sparar användarens val i localStorage
    });
} else {
    console.error("Mörkt läge-knappen hittades inte."); // Skriver ut ett fel om knappen saknas
}


