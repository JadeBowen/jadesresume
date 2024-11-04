// Mobile Navigation Toggle
const mobileMenuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Show More/Show Less Functionality for Experience and Philosophy Sections
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content');
        const content = document.getElementById(contentId);
        const isExpanded = button.getAttribute('data-expanded') === 'true';

        if (content) {
            if (isExpanded) {
                content.style.display = 'none';
                button.innerText = 'Show More';
            } else {
                content.style.display = 'block';
                button.innerText = 'Show Less';
            }
            button.setAttribute('data-expanded', !isExpanded);
        }
    });
});// Intersection Observer for Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animation');

const observerOptions = {
    threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

scrollElements.forEach(element => {
    scrollObserver.observe(element);
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

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
});// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Show More / Show Less Functionality for Job Descriptions
document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content');
        const content = document.getElementById(contentId);
        const isExpanded = button.getAttribute('data-expanded') === 'true';

        if (isExpanded) {
            content.style.display = 'none';
            button.innerText = 'Show More';
        } else {
            content.style.display = 'block';
            button.innerText = 'Show Less';
        }

        button.setAttribute('data-expanded', !isExpanded);
    });
});
