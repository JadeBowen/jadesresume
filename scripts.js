// Scroll Animation
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.scroll-animate');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('scroll-visible');
        } else {
            section.classList.remove('scroll-visible');
        }
    });
};

let debounce;
window.addEventListener('scroll', function () {
    clearTimeout(debounce);
    debounce = setTimeout(animateOnScroll, 20);
});

// Expand/Collapse Job Details
function toggleDetails(id) {
    const section = document.getElementById(id);
    section.classList.toggle('visible');
}

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Placeholder for actual submission handling)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Your message has been sent!'); // Placeholder alert
});
