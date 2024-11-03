// Mobile Navigation Toggle
const mobileNav = document.querySelector('.mobile-nav');
const navToggle = document.querySelector('.nav-toggle');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show More/Show Less Buttons
const showMoreBtns = document.querySelectorAll('.show-more-btn');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const extraContent = document.getElementById(targetId);

    extraContent.classList.toggle('show');

    if (extraContent.classList.contains('show')) {
      btn.textContent = 'Show Less';
    } else {
      btn.textContent = 'Show More';
    }
  });
});
// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Intersection Observer for Scroll Animations (implementation will depend on the specific animations)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation class to the element
      entry.target.classList.add('animate');
    }
  });
});

// Select the elements to animate and observe them
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(element => {
  observer.observe(element);
});
