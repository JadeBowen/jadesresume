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

// Loading Animation for Splash Screen
window.addEventListener('load', function() {
  const splash = document.querySelector('.splash-screen');
  splash.classList.add('fade-out');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Submission Handler (If you have a form)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
