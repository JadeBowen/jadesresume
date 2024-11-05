// Smooth Scrolling with Error Handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Check if the target section exists
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Target section not found: ${this.getAttribute('href')}`);
        }
    });
});

// Back-to-Top Button Logic
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Accordion Functionality (Mobile-Only) for Sections
function setupAccordion() {
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const accordionContent = toggle.nextElementSibling;
            const isOpen = toggle.classList.contains('active');

            // Close any open accordion sections
            document.querySelectorAll('.accordion-toggle.active').forEach(activeToggle => {
                activeToggle.classList.remove('active');
                activeToggle.nextElementSibling.style.maxHeight = null;
            });

            // Toggle the clicked section
            if (!isOpen) {
                toggle.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                toggle.classList.remove('active');
                accordionContent.style.maxHeight = null;
            }
        });
    });
}

// Apply accordion only on mobile
function adjustAccordionForDevice() {
    if (window.innerWidth <= 768) {
        setupAccordion();
    } else {
        // Remove accordion behavior for desktop
        document.querySelectorAll('.accordion-toggle').forEach(toggle => {
            toggle.classList.remove('active');
            const content = toggle.nextElementSibling;
            if (content) content.style.maxHeight = 'none'; // Ensure all content is visible on desktop
        });
    }
}

// Lazy Loading for Images
document.querySelectorAll('img[data-src]').forEach(img => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImg = entry.target;
                lazyImg.src = lazyImg.getAttribute('data-src');
                lazyImg.removeAttribute('data-src');
                observer.unobserve(lazyImg);
            }
        });
    }, {
        rootMargin: '100px',
        threshold: 0.1
    });
    observer.observe(img);
});

// Scroll Reveal Animation
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach((section) => {
    revealObserver.observe(section);
});

// Resize Listener for Accordion Toggle (Desktop vs Mobile)
window.addEventListener('resize', adjustAccordionForDevice);
adjustAccordionForDevice(); // Initialize on load