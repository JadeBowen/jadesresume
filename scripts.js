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

// Toggle Resume Details for Collapsible Job Descriptions
function toggleDetails(id) {
  const section = document.getElementById(id);
  section.classList.toggle('visible');
}

// Splash Screen Fade Out and
