// Toggles show-more details
function toggleShowMore(button) {
  if (window.innerWidth > 768) return; // Skip on desktop
  const moreDetails = button.previousElementSibling;

  // Toggle the display of the more-details section
  if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
    moreDetails.style.display = "block";
    button.textContent = "Show Less";
    button.setAttribute('aria-expanded', 'true');
  } else {
    moreDetails.style.display = "none";
    button.textContent = "Show More";
    button.setAttribute('aria-expanded', 'false');
  }
}

// Toggles class on element, updates button text/attributes
function toggleState(element, className, button, ariaExpanded) {
  element.classList.toggle(className);
  button.setAttribute('aria-expanded', !ariaExpanded);
}
// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle('open');
  navUl.classList.toggle("show");

  // Update ARIA attributes
  const ariaExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
  hamburgerMenu.setAttribute('aria-expanded', !ariaExpanded);

  // Focus management for accessibility
  if (navUl.classList.contains("show")) {
    navUl.querySelector("a").focus(); // Focus on the first link when opened
  } else {
    hamburgerMenu.focus(); // Return focus to the button when closed
  }

  // Automatically collapse the hamburger menu after selecting an item
  navUl.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navUl.classList.remove("show");
      hamburgerMenu.classList.remove('open'); // Ensure the icon updates
      hamburgerMenu.setAttribute('aria-expanded', 'false');
      hamburgerMenu.focus(); // Return focus to the hamburger menu
    });
  });
});
// Smooth scrolling for navigation links (using event delegation)
document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Adjust scroll position to account for fixed header
      const headerOffset = 80; // Adjust this value to match your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
});

// Back-to-top button
const backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
