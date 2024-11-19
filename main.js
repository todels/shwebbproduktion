// Get necessary elements
const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

// Select SVG elements
const handwrittenImageIndex = document.querySelector('.hero img[src*="handwritten_1.svg"]'); // Select handwritten_1.svg
const handwrittenImageGuides = document.querySelector('.guide-header img[src*="handwritten_2.svg"]'); // Select handwritten_2.svg

// Function to update handwritten images
const updateHandwrittenImages = (isDarkMode) => {
    if (isDarkMode) {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1_dm.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2_dm.svg";
    } else {
        if (handwrittenImageIndex) handwrittenImageIndex.src = "other/handwritten_1.svg";
        if (handwrittenImageGuides) handwrittenImageGuides.src = "other/handwritten_2.svg";
    }
};

// Check for dark mode state in localStorage and apply it on page load
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/moon.svg"; // Moon icon for Dark Mode
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk";
    updateHandwrittenImages(true); // Apply dark mode images
} else {
    body.classList.remove("dark-mode");
    if (toggleIcon) toggleIcon.src = "icons/sun.svg"; // Sun icon for Light Mode
    if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus";
    updateHandwrittenImages(false); // Apply light mode images
}

// Add event listener to toggle button
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");

        // Update icons and text
        if (isDarkMode) {
            if (toggleIcon) toggleIcon.src = "icons/moon.svg";
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Mörk";
        } else {
            if (toggleIcon) toggleIcon.src = "icons/sun.svg";
            if (darkModeToggle) darkModeToggle.querySelector("span").innerText = "Ljus";
        }

        // Update handwritten images
        updateHandwrittenImages(isDarkMode);

        // Save preference to localStorage
        localStorage.setItem("darkMode", isDarkMode);
    });
} else {
    console.error("Dark mode toggle button not found.");
}
