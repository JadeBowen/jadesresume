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
});// Accordion Functionality for Job Experiences and Statements
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Close any open accordion sections
        document.querySelectorAll('.accordion-header.active').forEach(activeHeader => {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.maxHeight = null;
        });

        // Toggle the clicked section
        if (!isActive) {
            header.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            header.classList.remove('active');
            accordionContent.style.maxHeight = null;
        }
    });
});// Tooltip Functionality for Skills
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = skill.getAttribute('data-tooltip');  // Skill description set in HTML
        document.body.appendChild(tooltip);

        // Position tooltip near the hovered skill
        const rect = skill.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
        
        skill.addEventListener('mouseleave', () => {
            tooltip.remove();
        });
    });
});

// Scroll Reveal Animation using Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Apply scroll reveal to each section with 'scroll-reveal' class
document.querySelectorAll('.scroll-reveal').forEach(section => {
    observer.observe(section);
});
