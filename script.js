// Light/Dark Mode Toggle Functionality
function toggleLightDarkMode() {
  const body = document.body;
  const button = document.querySelector('.toggle-dark-mode');

  // Toggle light mode class on the body
  body.classList.toggle('light-mode');

  // Update button text and aria-label based on current mode
  const modeText = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  button.textContent = modeText;
  button.setAttribute('aria-label', modeText); // Accessibility support
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
backToTopBtn.setAttribute('aria-label', 'Back to Top'); // Accessibility support
document.body.appendChild(backToTopBtn);

// Show/Hide Back to Top Button on Scroll
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to Top on Button Click
backToTopBtn.addEventListener('click', scrollToTop);// Mobile Menu Toggle Functionality for Hamburger Menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  const mobileMenuButton = document.querySelector('.hamburger-menu');
  const isExpanded = navMenu.classList.toggle('show');

  // Update aria-expanded for accessibility
  mobileMenuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  mobileMenuButton.style.backgroundColor = isExpanded ? '#333' : 'transparent'; // Visual cue
}

// Event Listener for Mobile Menu Button
const mobileMenuButton = document.querySelector('.hamburger-menu');
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close the mobile menu when a link inside the menu is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    if (navMenu.classList.contains('show')) {
      toggleMobileMenu();
    }
  });
});// Show More / Show Less Toggle Functionality for Mobile
function toggleShowMore(button) {
  const moreDetails = button.nextElementSibling; // Correct targeting with nextElementSibling
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Toggle visibility and update aria-expanded attribute
  moreDetails.style.display = isExpanded ? 'none' : 'block';
  button.setAttribute('aria-expanded', !isExpanded);
  button.textContent = isExpanded ? 'Show More' : 'Show Less';
}

// Add Event Listeners for Show More Buttons on Mobile
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', () => toggleShowMore(button));
});

// Expand details by default on larger screens
if (window.innerWidth >= 768) {
  document.querySelectorAll('.more-details').forEach(details => {
    details.style.display = 'block';
  });
}// Smooth Scrolling for Navigation Links
function smoothScroll() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetElement = document.querySelector(targetId);

      // Scroll to the target element if it exists
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize Smooth Scrolling on Window Load
window.addEventListener('load', smoothScroll);
