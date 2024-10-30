// JavaScript for interactive elements

// Function to observe and handle intersections for various elements
function observeElements() {
  const elementsToObserve = document.querySelectorAll('.skill-bar, .fade-in, .timeline .container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('skill-bar')) {
          // Animate skill bars
          const barFill = entry.target.querySelector('.skill-bar-fill');
          const percentage = entry.target.dataset.percentage;
          barFill.style.width = `${percentage}%`;
        } else {
          // Apply fade-in effect
          entry.target.classList.add('appear');
        }
        observer.unobserve(entry.target);
      }
    });
  });

  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
}

// Event listener to trigger observation on load
window.addEventListener('load', observeElements);


// Function to toggle light/dark mode
function toggleLightDarkMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-dark-mode');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Event listener to trigger light/dark mode toggle button
document.querySelector('.toggle-dark-mode').addEventListener('click', toggleLightDarkMode);

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
  // Add ARIA attributes for accessibility
  const isExpanded = navMenu.classList.toggle('show');
  mobileMenuButton.setAttribute('aria-expanded', isExpanded); 

  // Add visual cue (e.g., change background color)
  mobileMenuButton.style.backgroundColor = isExpanded ? '#333' : 'transparent'; 
}

// Event listener for mobile menu toggle
// (assuming a hamburger button is added in HTML with the class "hamburger-menu")
const mobileMenuButton = document.querySelector('.hamburger-menu');
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', toggleMobileMenu);

  // Add ARIA attributes for accessibility
  mobileMenuButton.setAttribute('aria-label', 'Toggle Navigation Menu');
  mobileMenuButton.setAttribute('aria-haspopup', 'true');
  mobileMenuButton.setAttribute('aria-expanded', 'false'); 

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        toggleMobileMenu(); // Close the menu
      }
    });
  });
}

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
