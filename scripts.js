// Dark Mode Toggle
const toggleDarkMode = document.querySelector('.dark-mode-toggle');

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Show/Hide Sections Functionality (using event delegation)
document.querySelector('#experience').addEventListener('click', (event) => {
  if (event.target.classList.contains('toggle-btn')) {
    const content = event.target.previousElementSibling;
    content.classList.toggle('hidden');
    event.target.textContent = content.classList.contains('hidden') ? 'Show More' : 'Show Less';
  }
});

// Sticky Navigation on Scroll
const navMenu = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navMenu.classList.add('sticky');
  } else {
    navMenu.classList.remove('sticky');
  }
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => { // Wait for DOM to fully load
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.dataset.src; 
  });
});

// Auto-Collapse Navigation Menu (Mobile Only)
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navMenu.classList.remove('active'); // Assuming you have a class 'active' for the open menu
    }
  });
});

// Keyboard Navigation Shortcuts
document.addEventListener('keydown', (event) => {
  if (event.key === 'm') {
    document.querySelector('.menu-toggle').click(); // Assuming you have a menu toggle button
  }
  if (event.key === 'd') {
    toggleDarkMode.click();
  }
});

// Show Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});
