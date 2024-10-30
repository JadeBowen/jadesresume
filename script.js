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

// Event listener to trigger light/dark mode toggle button
document.querySelector('.toggle-dark-mode').addEventListener('click', toggleLightDarkMode);
// Function to create an interactive timeline
function createInteractiveTimeline() {
  const timelineItems = document.querySelectorAll('.timeline .container');

  // Basic interactivity: Fade-in effect as timeline items scroll into view
  timelineItems.forEach(item => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          item.classList.add('appear');
          observer.unobserve(item);
        }
      });
    });
    observer.observe(item);
  });
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

// Mobile menu toggle functionality for hamburger menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('show');
}

// Event listener for mobile menu toggle (assuming a hamburger button is added in HTML with the class "hamburger-menu")
const mobileMenuButton = document.querySelector('.hamburger-menu');
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
}

// Call the interactive timeline function on load
window.addEventListener('load', createInteractiveTimeline);
// Utility function to debounce scroll events
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
          args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
