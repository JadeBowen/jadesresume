// Splash Screen Removal
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 1500); // Short delay before fade-out begins

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

// Expandable Sections Functionality
const expandableSections = document.querySelectorAll('.read-more');
expandableSections.forEach((button) => {
    button.addEventListener('click', function() {
        const section = this.previousElementSibling;
        const isExpanded = section.classList.toggle('expanded');

        if (isExpanded) {
            this.textContent = "Read Less";
        } else {
            this.textContent = "Read More";
        }
    });
});

// Toggle Expandable Sections Content
document.querySelectorAll('.experience-entry, .philosophy-section, .proficiencies-section').forEach(section => {
    const content = section.querySelector('.expanded-content');
    const toggleButton = section.querySelector('.read-more');

    if (content && toggleButton) {
        toggleButton.addEventListener('click', () => {
            content.classList.toggle('show');
            toggleButton.textContent = content.classList.contains('show') ? "Read Less" : "Read More";
        });
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
