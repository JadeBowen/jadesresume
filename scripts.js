// Toggle "Show More / Show Less" Functionality for All Expandable Sections
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling; // Select the hidden content
            if (content.classList.contains("hidden-content")) {
                content.classList.toggle("hidden"); // Toggle visibility
                this.textContent = content.classList.contains("hidden") ? "Show More" : "Show Less";
            }
        });
    });
});

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
