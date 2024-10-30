// JavaScript for interactive elements

// Function to animate skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(bar => {
    const barFill = bar.querySelector('.skill-bar-fill');
    const percentage = bar.dataset.percentage;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          barFill.style.width = `${percentage}%`;
          observer.unobserve(bar);
        }
      });
    });

    observer.observe(bar);
  });
}

// Fade-in effect on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('appear');
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  });
}

// Event listeners to trigger functions on load
window.addEventListener('load', animateSkillBars);
window.addEventListener('load', fadeInOnScroll);

// Function to toggle light/dark mode
function toggleLightDarkMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-dark-mode');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Function to create an interactive timeline (you'll need to add the necessary HTML elements)
function createInteractiveTimeline() {
  // Code to implement timeline interactivity
}

// Function to implement smooth scrolling for navigation links
function smoothScroll() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Event listener to trigger smooth scrolling
window.addEventListener('load', smoothScroll);

// Attach the light/dark mode toggle button (assuming HTML button added)
document.querySelector('.toggle-dark-mode').addEventListener('click', toggleLightDarkMode);
