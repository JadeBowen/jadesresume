document.addEventListener("DOMContentLoaded", function () {

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Mobile Navigation Toggle Functionality
    const navigationButton = document.querySelector(".navigation-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    navigationButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("active");
        navigationButton.textContent = dropdownContent.classList.contains("active") ? "Close" : "Navigation";
    });

    // Auto-collapse the dropdown menu after navigating to a section on mobile
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.addEventListener("click", function () {
            dropdownContent.classList.remove("active");
            navigationButton.textContent = "Navigation";
        });
    });

    // Back to Top Button
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

    // Show More/Show Less Toggle Functionality for each section
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const contentFull = button.previousElementSibling;
            contentFull.classList.toggle("hidden");
            button.textContent = contentFull.classList.contains("hidden") ? "Show More" : "Show Less";
        });
    });

    // Highlight Active Section on Scroll (PC View)
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
