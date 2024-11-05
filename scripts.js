// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
});// Accordion Functionality for Sections
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
});// Tooltip Functionality for Skills & Proficiencies
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = skill.getAttribute('data-tooltip');  // Tooltip text is stored in data-tooltip attribute
        document.body.appendChild(tooltip);

        // Position tooltip near the hovered skill
        const rect = skill.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
        
        // Remove tooltip on mouse leave
        skill.addEventListener('mouseleave', () => {
            tooltip.remove();
        });
    });
});// Scroll Reveal Animation using Intersection Observer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // Add 'reveal' class when in viewport
        }
    });
}, { threshold: 0.1 }); // Adjusts sensitivity; lower values trigger earlier

// Apply scroll reveal to each section marked with the 'scroll-reveal' class
document.querySelectorAll('.scroll-reveal').forEach((section) => {
    observer.observe(section);
});// Smooth Scrolling for Anchor Links with Error Handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Check if target section exists
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Target section not found: ${this.getAttribute('href')}`);
        }
    });
});

// Back-to-Top Button with Error Handling
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
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
} else {
    console.warn("Back-to-Top button element not found.");
}

// Enhanced Accordion Functionality for Accessibility
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Accessibility: Set ARIA attributes for better screen reader support
        header.setAttribute('aria-expanded', !isActive);
        accordionContent.setAttribute('aria-hidden', isActive);

        // Close other open sections
        document.querySelectorAll('.accordion-header.active').forEach(activeHeader => {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.maxHeight = null;
        });

        // Toggle clicked section
        if (!isActive) {
            header.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            header.classList.remove('active');
            accordionContent.style.maxHeight = null;
        }
    });
});// Lazy Loading for Images
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
        rootMargin: '100px', // Load images slightly before they appear
        threshold: 0.1
    });
    observer.observe(img);
});

// Throttling Scroll Event for Performance
let throttleTimeout;
window.addEventListener('scroll', () => {
    if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
            throttleTimeout = null;
            // Execute any heavy operations here, like revealing elements
        }, 100);
    }
});

// Debounce for Resize Event to Improve Performance
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Perform resize-dependent tasks here
    }, 200);
});
