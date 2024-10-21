// Splash Screen Fade Out and Play Audio
window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const audio = document.getElementById('whoosh-sound');

    // Play the whoosh sound if available
    if (audio) {
        audio.play();
    }

    // Ensure splash screen fades out after 2 seconds
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 2000);  // Fade out after 2 seconds
});

// Toggle Resume Details for Collapsible Job Descriptions
function toggleDetails(id) {
    const section = document.getElementById(id);
    section.classList.toggle('visible');
}

// Scroll Animations for Section Visibility
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => {
        const triggerBottom = window.innerHeight * 0.85;
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('scroll-visible');
        } else {
            section.classList.remove('scroll-visible');
        }
    });
});
