// Toggle "Show More" and "Show Less" functionality for expandable sections
document.addEventListener("DOMContentLoaded", function () {
    // Select all toggle buttons and add event listeners
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const targetContent = button.previousElementSibling; // Target the content above the button

            // Toggle the hidden content display
            if (targetContent.classList.contains("hidden-content")) {
                targetContent.classList.remove("hidden-content");
                button.classList.add("expanded"); // Add expanded class for styling
                button.textContent = "Show Less";
            } else {
                targetContent.classList.add("hidden-content");
                button.classList.remove("expanded");
                button.textContent = "Show More";
            }
        });
    });
});

// Back-to-Top Button Visibility Toggle
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Back-to-Top Scroll Functionality
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
