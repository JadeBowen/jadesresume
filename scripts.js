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

// Accordion Functionality for Mission, Impact, Professional Summary, and Professional Experience Sections
document.querySelectorAll('.accordion-section').forEach(section => {
    const content = section.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    // Append the Show More button after the first sentence
    content.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        // Toggle display of the full content
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            content.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });

    // Initially hide the content beyond the first sentence
    content.style.display = 'none';
});

// Show More Functionality for Professional Experience Job Entries
document.querySelectorAll('.job-entry').forEach(entry => {
    const moreContent = entry.querySelector('.more-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    // Append the Show More button after the first bullet point
    moreContent.insertAdjacentElement('afterend', showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        // Toggle display of the full job details
        if (moreContent.style.display === 'none' || !moreContent.style.display) {
            moreContent.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });

    // Initially hide the content beyond the first bullet point
    moreContent.style.display = 'none';
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

// Initialize the script
window.addEventListener('resize', adjustAccordionForDevice);
adjustAccordionForDevice(); // Initialize on load
// Add Show More functionality to all job entries
document.querySelectorAll('.job-entry').forEach(entry => {
    const content = entry.querySelector('.accordion-content');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more');
    showMoreBtn.textContent = 'Show More';

    // Append the Show More button to each job entry
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

    // Initially hide the extra content
    content.style.display = 'none';
});
