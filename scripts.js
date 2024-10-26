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

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '↑';
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

// Expandable Content Management
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
