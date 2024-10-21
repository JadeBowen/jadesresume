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
window.addEventListener('scroll', function() {
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
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Splash Screen Fade Out
window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');

    // Fade out after 2 seconds
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 2000);  // Adjust the timing as needed
});
