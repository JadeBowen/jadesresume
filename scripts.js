// Wait for the DOM to load
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
        menuToggleButton.textContent = navbar.classList.contains("show") ? "Close" : "Menu";
    });
    
    // Show More/Show Less Toggle Functionality
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const contentFull = button.previousElementSibling;
            contentFull.classList.toggle("hidden");
            button.textContent = contentFull.classList.contains("hidden") ? "Show More" : "Show Less";
        });
    });

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
