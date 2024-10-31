// Light/Dark Mode Toggle Functionality
function toggleLightDarkMode() {
  // Select the body element and the toggle button
  const body = document.body;
  const button = document.querySelector('.toggle-dark-mode');
  
  // Toggle light mode class on the body element
  body.classList.toggle('light-mode');
  
  // Update button text based on current mode
  if (body.classList.contains('light-mode')) {
    button.textContent = 'Switch to Dark Mode';
  } else {
    button.textContent = 'Switch to Light Mode';
  }
}

// Add an event listener to the light/dark mode toggle button
const toggleButton = document.querySelector('.toggle-dark-mode');
toggleButton.addEventListener('click', function() {
  toggleLightDarkMode();
});

// Sticky positioning setup for the mobile light/dark toggle button
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.zIndex = '200';// Sticky Navigation Bar Setup
window.addEventListener('scroll', function () {
  // Select the navigation bar
  const nav = document.querySelector('nav');
  
  // Toggle the 'sticky' class based on the scroll position
  if (window.scrollY > 0) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Back to Top Button Functionality
function scrollToTop() {
  // Smoothly scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create Back to Top Button and Append it to the Body
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');

// Apply inline styles for positioning and appearance of Back to Top button
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '10px';
backToTopButton.style.right = '10px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '100';
backToTopButton.style.display = 'none'; // Hidden initially

// Append Back to Top button to the body
document.body.appendChild(backToTopButton);

// Show or hide the Back to Top button based on scroll position
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Add Event Listener for Back to Top Button Click
backToTopButton.addEventListener('click', function() {
  scrollToTop();
});// Function to toggle Show More / Show Less content for Experience and Philosophy sections
function toggleShowMore(button) {
  // Select the content to expand/collapse
  const moreDetails = button.previousElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Toggle display of more details
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

// Enable Show More / Show Less only on mobile devices (screens below 768px)
if (window.innerWidth < 768) {
  // Select all Show More buttons and add event listeners to each one
  document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function () {
      toggleShowMore(button);
    });
  });
} else {
  // Automatically expand content on desktop by adding the 'show' class to all hidden content sections
  document.querySelectorAll('.more-details').forEach(details => {
    details.classList.add('show');
  });
}// Smooth Scrolling for Navigation Links
function smoothScroll() {
  // Select all navigation links
  document.querySelectorAll('nav a').forEach(link => {
    // Add click event listener to each navigation link
    link.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();
      
      // Get the target section ID from the href attribute
      const targetId = this.getAttribute('href');
      
      // Select the target element by its ID
      const targetElement = document.querySelector(targetId);
      
      // Scroll smoothly to the target element if it exists
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Call the smoothScroll function on window load to set up the event listeners
window.addEventListener('load', smoothScroll);

// Mobile Menu Toggle Functionality for Hamburger Menu
function toggleMobileMenu() {
  // Select the navigation menu and toggle the 'show' class
  const navMenu = document.querySelector('nav ul');
  const isExpanded = navMenu.classList.toggle('show');
  
  // Update the ARIA attribute for accessibility
  mobileMenuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

  // Change the background color as a visual cue for the menu being open or closed
  mobileMenuButton.style.backgroundColor = isExpanded ? '#333' : 'transparent';
}

// Set up the hamburger menu button for mobile
const mobileMenuButton = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

// Add event listener for mobile menu toggle functionality
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', function() {
    toggleMobileMenu();
  });

  // Close the mobile menu when a link inside the menu is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      // Check if the mobile menu is open before toggling
      if (navMenu.classList.contains('show')) {
        toggleMobileMenu(); // Close the menu
      }
    });
  });
}
