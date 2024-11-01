// Function to toggle the display of more details
function toggleShowMore(button) {
  if (window.innerWidth > 768) { 
    return; // Do nothing on larger screens (PC)
  }

  const moreDetails = button.previousElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Toggle the display and update button text/attributes
  moreDetails.style.display = isExpanded ? 'none' : 'block';
  button.textContent = isExpanded ? 'Show More' : 'Show Less';
  button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
}

// Function to toggle the state of an element and update button attributes
function toggleState(element, className, button) {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  element.classList.toggle(className);
  button.setAttribute('aria-expanded', !isExpanded);
}

// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  toggleState(navUl, "show", hamburgerMenu);

  // Focus management for accessibility
  if (navUl.classList.contains("show")) {
    navUl.querySelector("a").focus(); // Focus on the first link when opened
  } else {
    hamburgerMenu.focus(); // Return focus to the button when closed
  }
});
// Smooth scrolling for navigation links
navUl.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    // Close the mobile menu after clicking a link
    navUl.classList.remove("show");
    hamburgerMenu.setAttribute('aria-expanded', 'false');
    hamburgerMenu.focus();

    // Smooth scrolling with offset for fixed header
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust to match your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
// Back-to-top button
const backToTopBtn = document.getElementById("back-to-top-btn");

// Show/hide the button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top when the button is clicked
backToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
