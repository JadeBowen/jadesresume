// Splash Screen Removal
document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000); // 2-second delay before fade-out begins

    // Remove splash screen from DOM after transition
    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Link Highlighting in Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.innerHTML = '↑'; // Icon for back to top
backToTopButton.setAttribute("aria-label", "Back to Top");
document.body.appendChild(backToTopButton);

// Show/Hide Back to Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth Scroll to Top on Button Click
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Expandable Content Management with <details> Elements
const detailsElements = document.querySelectorAll("details");
detailsElements.forEach(details => {
    details.addEventListener("toggle", () => {
        if (details.open) {
            detailsElements.forEach(otherDetails => {
                if (otherDetails !== details && otherDetails.open) {
                    otherDetails.open = false; // Close other open details
                }
            });
        }
    });
});
