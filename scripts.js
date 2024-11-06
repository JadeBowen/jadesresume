// Smooth Scrolling with Error Handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

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

// Accordion Functionality for All Sections Requiring Show More
document.querySelectorAll('.accordion-section').forEach(section => {
    const content = section.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    content.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            content.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });

    content.style.display = 'none';
});

// Show More Functionality for Each Job Entry
document.querySelectorAll('.job-entry').forEach(entry => {
    const content = entry.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    content.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            content.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });

    content.style.display = 'none';
});

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

// Scroll Reveal Animation for "scroll-reveal" Sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach((section) => {
    revealObserver.observe(section);
});// Enhanced Accordion Show More Toggle for Better User Experience
document.querySelectorAll('.accordion-section').forEach(section => {
    const content = section.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    // Insert the button just after the first part of the content
    content.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            content.style.maxHeight = '80px'; // Show only the initial lines
            showMoreBtn.textContent = 'Show More';
        } else {
            content.classList.add('expanded');
            content.style.maxHeight = `${content.scrollHeight}px`; // Show full content
            showMoreBtn.textContent = 'Show Less';
        }
    });

    content.style.maxHeight = '80px'; // Initial height to show part of the content
});

// Show More Button for Each Job Entry
document.querySelectorAll('.job-entry').forEach(entry => {
    const content = entry.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    content.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            content.style.maxHeight = '60px';
            showMoreBtn.textContent = 'Show More';
        } else {
            content.classList.add('expanded');
            content.style.maxHeight = `${content.scrollHeight}px`;
            showMoreBtn.textContent = 'Show Less';
        }
    });

    content.style.maxHeight = '60px'; // Initially hide extra content, showing only a part
});

// Observer for Sticky Header Adjustment on Mobile
const stickyHeaderObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const navMenu = document.querySelector('.nav-menu');
        if (!entry.isIntersecting) {
            navMenu.classList.add('fixed'); // Sticky effect when out of view
        } else {
            navMenu.classList.remove('fixed');
        }
    });
}, { rootMargin: '0px 0px -100% 0px' });

stickyHeaderObserver.observe(document.querySelector('header'));

// Intersection Observer for Consistent Scroll Animation on Mobile
const scrollRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal'); // Add scroll reveal class
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(section => {
    scrollRevealObserver.observe(section);
});

// Scroll Animation for Back-to-Top Button on Mobile
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.visibility = 'hidden';
    }
});// Lazy Loading for Images - Improves page load performance
document.querySelectorAll('img[data-src]').forEach(img => {
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.getAttribute('data-src');
                lazyImage.removeAttribute('data-src');
                observer.unobserve(lazyImage);
            }
        });
    }, { rootMargin: '50px 0px', threshold: 0.1 });

    lazyLoadObserver.observe(img);
});

// Improved Show More/Show Less Toggle with Expanded Tracking
document.querySelectorAll('.accordion-section, .job-entry').forEach(section => {
    const content = section.querySelector('.accordion-content');
    const showMoreBtn = section.querySelector('.show-more');

    // Initialize collapsed state
    if (content) content.style.maxHeight = '80px';

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            const isExpanded = content.classList.contains('expanded');
            content.classList.toggle('expanded');
            content.style.maxHeight = isExpanded ? '80px' : `${content.scrollHeight}px`;
            showMoreBtn.textContent = isExpanded ? 'Show More' : 'Show Less';
        });
    }
});

// Back-to-Top Button Visibility and Smooth Scroll
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
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

// Maintain Consistent Button Toggle for Accordion Sections and Job Entries
document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
        toggle.setAttribute('aria-expanded', !isVisible);
    });
});// Scroll Reveal Animation for Smooth Appearances
const revealElements = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => revealObserver.observe(el));

// Ensure Consistent Height Adjustment for Show More Sections on Window Resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.accordion-content, .job-entry .accordion-content').forEach(content => {
        if (content.classList.contains('expanded')) {
            content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
            content.style.maxHeight = '80px';
        }
    });
});

// Add Event Listener to Adjust Accordion for Device Orientation Changes
window.addEventListener('orientationchange', () => {
    document.querySelectorAll('.accordion-content, .job-entry .accordion-content').forEach(content => {
        if (content.classList.contains('expanded')) {
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    });
});

// Responsive Adjustment for Navigation Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu ul');

mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('expanded');
    mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    if (isExpanded) {
        navMenu.style.maxHeight = `${navMenu.scrollHeight}px`;
    } else {
        navMenu.style.maxHeight = '0px';
    }
});
