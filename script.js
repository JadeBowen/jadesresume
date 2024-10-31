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
toggleButton.addEventListener('click', toggleLightDarkMode);// Mobile Menu Toggle Functionality
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  const mobileMenuButton = document.querySelector('.hamburger-menu');
  const isExpanded = navMenu.classList.toggle('show');

  // Update aria-expanded for accessibility
  mobileMenuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
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
});// Show More / Show Less Toggle Functionality
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling.querySelector('.more-details');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Toggle visibility and update aria-expanded attribute
  moreDetails.style.display = isExpanded ? 'none' : 'block';
  button.setAttribute('aria-expanded', !isExpanded);
  button.textContent = isExpanded ? 'Show More' : 'Show Less';
}

// Add Event Listeners for Show More Buttons
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', function () {
    toggleShowMore(this);
  });
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
