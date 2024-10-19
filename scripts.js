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

window.addEventListener('scroll', animateOnScroll);

// Expand/Collapse Job Details
function toggleDetails(id) {
  const section = document.getElementById(id);
  section.classList.toggle('visible');
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
});