// Function to toggle the "show-more" class for additional details
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling;
  moreDetails.style.display = moreDetails.style.display === "none" ? "block" : "none";
  button.textContent = button.textContent === "Show More" ? "Show Less" : "Show More";
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
}

// Function to toggle a class on an element and update button text/attributes
function toggleState(element, className, button, labels, ariaLabels) {
  element.classList.toggle(className);
  const isToggled = element.classList.contains(className);
  button.textContent = labels[isToggled ? 1 : 0];
  button.setAttribute('aria-label', ariaLabels[isToggled ? 1 : 0]);
}

// Dark mode toggle
const darkModeButton = document.querySelector(".toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
  toggleState(
    document.body,
    "light-mode",
    darkModeButton,
    ["Switch to Light Mode", "Switch to Dark Mode"],
    ["Switch to Light Mode", "Switch to Dark Mode"]
  );
  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Check for user's preference on page load
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "light") {
  document.body.classList.add("light-mode");
  darkModeButton.textContent = "Switch to Dark Mode";
  darkModeButton.setAttribute('aria-label', "Switch to Dark Mode");
}
// Function to toggle the "show-more" class for additional details
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling;
  moreDetails.style.display = moreDetails.style.display === "none" ? "block" : "none";
  button.textContent = button.textContent === "Show More" ? "Show Less" : "Show More";
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
}

// Function to toggle a class on an element and update button text/attributes
function toggleState(element, className, button, labels, ariaLabels) {
  element.classList.toggle(className);
  const isToggled = element.classList.contains(className);
  button.textContent = labels[isToggled ? 1 : 0];
  button.setAttribute('aria-label', ariaLabels[isToggled ? 1 : 0]);
}

// Dark mode toggle
const darkModeButton = document.querySelector(".toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
  toggleState(
    document.body,
    "light-mode",
    darkModeButton,
    ["Switch to Light Mode", "Switch to Dark Mode"],
    ["Switch to Light Mode", "Switch to Dark Mode"]
  );
  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Check for user's preference on page load
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "light") {
  document.body.classList.add("light-mode");
  darkModeButton.textContent = "Switch to Dark Mode";
  darkModeButton.setAttribute('aria-label', "Switch to Dark Mode");
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
});
// Function to toggle the "show-more" class for additional details
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling;
  moreDetails.style.display = moreDetails.style.display === "none" ? "block" : "none";
  button.textContent = button.textContent === "Show More" ? "Show Less" : "Show More";
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
}

// Function to toggle a class on an element and update button text/attributes
function toggleState(element, className, button, labels, ariaLabels) {
  element.classList.toggle(className);
  const isToggled = element.classList.contains(className);
  button.textContent = labels[isToggled ? 1 : 0];
  button.setAttribute('aria-label', ariaLabels[isToggled ? 1 : 0]);
}

// Dark mode toggle
const darkModeButton = document.querySelector(".toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
  toggleState(
    document.body,
    "light-mode",
    darkModeButton,
    ["Switch to Light Mode", "Switch to Dark Mode"],
    ["Switch to Light Mode", "Switch to Dark Mode"]
  );
  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Check for user's preference on page load
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "light") {
  document.body.classList.add("light-mode");
  darkModeButton.textContent = "Switch to Dark Mode";
  darkModeButton.setAttribute('aria-label', "Switch to Dark Mode");
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
// Function to toggle the "show-more" class for additional details
function toggleShowMore(button) {
  const moreDetails = button.previousElementSibling;
  moreDetails.style.display = moreDetails.style.display === "none" ? "block" : "none";
  button.textContent = button.textContent === "Show More" ? "Show Less" : "Show More";
  button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
}

// Function to toggle a class on an element and update button text/attributes
function toggleState(element, className, button, labels, ariaLabels) {
  element.classList.toggle(className);
  const isToggled = element.classList.contains(className);
  button.textContent = labels[isToggled ? 1 : 0];
  button.setAttribute('aria-label', ariaLabels[isToggled ? 1 : 0]);
}

// Dark mode toggle
const darkModeButton = document.querySelector(".toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
  toggleState(
    document.body,
    "light-mode",
    darkModeButton,
    ["Switch to Light Mode", "Switch to Dark Mode"],
    ["Switch to Light Mode", "Switch to Dark Mode"]
  );
  // Save the user's preference in localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Check for user's preference on page load
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "light") {
  document.body.classList.add("light-mode");
  darkModeButton.textContent = "Switch to Dark Mode";
  darkModeButton.setAttribute('aria-label', "Switch to Dark Mode");
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

// Back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top-btn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
