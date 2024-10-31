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

  // Update the menu button's aria-label as well
  const menuButton = document.querySelector('.hamburger-menu');
  if (menuButton) { // Check if the menu button exists
    const menuModeText = body.classList.contains('light-mode') ? 'Open Navigation Menu (Light Mode)' : 'Open Navigation Menu (Dark Mode)';
    menuButton.setAttribute('aria-label', menuModeText);
  }
}

// Event Listener for Light/Dark Mode Button
const toggleButton = document.querySelector('.toggle-dark-mode');
if (toggleButton) { // Check if the button exists
  toggleButton.addEventListener('click', toggleLightDarkMode);
}
// Mobile Menu Toggle Functionality
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  const mobileMenuButton = document.querySelector('.hamburger-menu');

  if (navMenu && mobileMenuButton) { // Check if both elements exist
    const isExpanded = navMenu.classList.toggle('show');

    // Update aria-expanded for accessibility
    mobileMenuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    mobileMenuButton.setAttribute('aria-label', isExpanded ? 'Close Navigation Menu' : 'Open Navigation Menu');
  }
}

// Event Listener for Mobile Menu Button
const mobileMenuButton = document.querySelector('.hamburger-menu');
if (mobileMenuButton) { // Check if the button exists
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
}

// Close the mobile menu when a link inside the menu is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    const mobileMenuButton = document.querySelector('.hamburger-menu');

    if (navMenu && mobileMenuButton && navMenu.classList.contains('show')) {
      toggleMobileMenu();
    }
  });
});
// Show More / Show Less Toggle Functionality
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling; 
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
// Smooth Scrolling for Navigation Links
function smoothScroll(event) {
  event.preventDefault(); // Prevent default anchor behavior

  const targetId = this.getAttribute('href'); // Get the target section ID
  const targetElement = document.querySelector(targetId);

  // Scroll to the target element if it exists
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize Smooth Scrolling on Window Load
window.addEventListener('load', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top-btn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Start in dark mode by default
toggleLightDarkMode(); // Call the function to initialize dark mode
