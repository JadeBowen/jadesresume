// Toggles show-more details
function toggleShowMore(button) {
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
function toggleState(element, className, button, labels, ariaLabels) {
  element.classList.toggle(className);
  const isToggled = element.classList.contains(className);
  button.textContent = labels[isToggled ? 1 : 0];
  button.setAttribute('aria-label', ariaLabels[isToggled ? 1 : 0]);
}
// Dark mode toggle
const darkModeBtn = document.querySelector(".toggle-dark-mode");
darkModeBtn.addEventListener("click", () => {
  toggleState(
    document.body,
    "light-mode",
    darkModeBtn,
    ["Switch to Light Mode", "Switch to Dark Mode"],
    ["Switch to Light Mode", "Switch to Dark Mode"]
  );
  // Save preference in localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Check for user's preference on page load
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "light") {
  document.body.classList.add("light-mode");
  darkModeBtn.textContent = "Switch to Dark Mode";
  darkModeBtn.setAttribute('aria-label', "Switch to Dark Mode");
}

// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  toggleState(
    navUl,
    "show",
    hamburgerMenu,
    ["Open Navigation Menu", "Close Navigation Menu"],
    ["Open Navigation Menu", "Close Navigation Menu"]
  );
  // Focus management for accessibility (example)
  if (navUl.classList.contains("show")) {
    navUl.querySelector("a").focus(); // Focus on the first link when opened
  } else {
    hamburgerMenu.focus(); // Return focus to the button when closed
  }

  // Automatically collapse the hamburger menu after selecting an item
  navUl.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navUl.classList.remove("show");
      hamburgerMenu.textContent = "Open Navigation Menu";
      hamburgerMenu.setAttribute('aria-label', "Open Navigation Menu");
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
      targetElement.scrollIntoView({ behavior: 'smooth' });
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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
