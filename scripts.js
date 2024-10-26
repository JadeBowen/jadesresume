// Splash Screen Removal
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 1500); // 1.5-second delay before fade-out begins

    // Remove splash screen from DOM after transition
    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expandable Sections (Read More functionality)
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const moreContent = this.previousElementSibling;
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            this.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            this.textContent = "Read More";
        }
    });
});
