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

// Toggle function for expanding job details
function toggleDetails(id) {
    const section = document.getElementById(id);
    section.classList.toggle('visible');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Contact Form Submission with Error Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
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
