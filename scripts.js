// Splash Screen Removal
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000);
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
