// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// "Show More" Toggle Functionality
document.querySelectorAll(".show-more-btn").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.previousElementSibling;
        content.classList.toggle("expanded");
        this.textContent = content.classList.contains("expanded") ? "Show Less" : "Show More";
    });
});// Mobile Navigation Toggle
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuIcon.setAttribute("aria-expanded", navMenu.classList.contains("open"));
});

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in-section").forEach(section => {
    observer.observe(section);
});
