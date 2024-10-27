// Splash Screen Removal
document.addEventListener("DOMContentLoaded", function() {
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
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle for "Read More" Content
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        this.textContent = content.style.display === 'none' ? 'Read More' : 'Show Less';
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '⬆';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
