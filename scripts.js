document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle Functionality
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Mobile Menu Toggle Functionality
    const menuToggleButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggleButton.addEventListener("click", function () {
        navbar.classList.toggle("show");
        menuToggleButton.textContent = navbar.classList.contains("show") ? "Close Menu" : "Navigation Menu";
    });
});
