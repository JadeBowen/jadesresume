// Light/Dark Mode Toggle Functionality
function toggleLightDarkMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-dark-mode');
  
  // Toggle light mode class on the body
  body.classList.toggle('light-mode');
  
  // Update button text based on current mode
  button.textContent = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Event Listener for Light/Dark Mode Button
const toggleButton = document.querySelector('.toggle-dark-mode');
toggleButton.addEventListener('click', toggleLightDarkMode);

// Back to Top Button Functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create and Append Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'back-to-top-btn';
backToTopBtn.textContent = 'Back to Top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '70px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

// Show/Hide Back to Top Button on Scroll
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to Top on Button Click
backToTopBtn.addEventListener('click', scrollToTop);// Show More / Show Less Toggle Functionality for Mobile
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    moreDetails.classList.remove('show');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Show More';
  } else {
    moreDetails.classList.add('show');
    button.setAttribute('aria-expanded', 'true');
    button.textContent = 'Show Less';
  }
}

// Apply Show More / Show Less for Mobile Only
if (window.innerWidth < 768) {
  document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function () {
      toggleShowMore(button);
    });
  });
} else {
  // Auto-expand details on larger screens
  document.querySelectorAll('.more-details').forEach(details => {
    details.classList.add('show');
  });
}

// Mobile Menu Toggle Functionality for Hamburger Menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  const isExpanded = navMenu.classList.toggle('show');
  mobileMenuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
}

// Set up the hamburger menu button for mobile
const mobileMenuButton = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

// Event Listener for Mobile Menu Toggle
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', toggleMobileMenu);

  // Close the mobile menu when a link inside the menu is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        toggleMobileMenu();
      }
    });
  });
}// Smooth Scrolling for Navigation Links
function smoothScroll() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Call the smoothScroll function on window load to set up the event listeners
window.addEventListener('load', smoothScroll);
