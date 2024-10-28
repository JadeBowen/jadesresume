// Dark Mode Toggle
const toggleDarkMode = document.querySelector('.dark-mode-toggle');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Show/Hide Sections Functionality
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        content.classList.toggle('hidden');
        button.textContent = content.classList.contains('hidden') ? 'Show More' : 'Show Less';
    });
});

// Sticky Navigation on Scroll (Mobile and Desktop Adjustments)
const navMenu = document.querySelector('.navbar');
const navigationButton = document.querySelector('.menu-toggle');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navMenu.classList.add('sticky');
        navigationButton.classList.add('sticky');
    } else {
        navMenu.classList.remove('sticky');
        navigationButton.classList.remove('sticky');
    }
});

// Lazy Loading Images
document.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => img.removeAttribute('data-src');
});

// Auto-Collapse Navigation Menu after Selection
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) { // Mobile view
            const navMenu = document.querySelector('.navbar');
            navMenu.classList.remove('active');
        }
    });
});

// Keyboard Navigation Shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'm') { // Example: 'm' to toggle menu
        document.querySelector('.menu-toggle').click();
    }
    if (event.key === 'd') { // Example: 'd' to toggle dark mode
        toggleDarkMode.click();
    }
});

// Show Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});
