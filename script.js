// Toggle mobile navigation
document.getElementById('menuToggle').addEventListener('click', function () {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('open');
});// Smooth scroll for navigation links
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Apply the observer to elements with the 'fade-in' class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
