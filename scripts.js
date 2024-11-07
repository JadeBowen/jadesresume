// Part 1: Helper Functions and Event Listeners

/**
 * Smoothly scrolls to a target element.
 *
 * @param {string} targetId - The ID of the target element.
 */
function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Target element not found: ${targetId}`);
  }
}

// Add event listeners to navigation links for smooth scrolling
document.querySelectorAll('.nav-menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1); // Remove the '#'
    smoothScrollTo(targetId);
  });
});

// Add event listener for the back-to-top button
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// Part 2: Accordion Functionality

/**
 * Toggles the visibility of an accordion content element.
 *
 * @param {HTMLElement} content - The content element to toggle.
 * @param {HTMLElement} toggle - The toggle button element.
 */
function toggleAccordionContent(content, toggle) {
  const isExpanded = content.classList.toggle('expanded');
  content.style.maxHeight = isExpanded ? `${content.scrollHeight}px` : '0';
  toggle.setAttribute('aria-expanded', isExpanded);
}

// Add event listeners to accordion toggles
document.querySelectorAll('.accordion-toggle').forEach((toggle) => {
  const content = toggle.nextElementSibling;
  toggle.addEventListener('click', () => {
    toggleAccordionContent(content, toggle);
  });
});
// Part 3: Scroll Reveal and Sticky Header

// Scroll reveal functionality
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
const scrollRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      scrollRevealObserver.unobserve(entry.target);
    }
  });
});
scrollRevealElements.forEach((el) => scrollRevealObserver.observe(el));

// Sticky header functionality
const header = document.querySelector('.main-header');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop;
});
