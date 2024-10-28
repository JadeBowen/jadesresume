// Dark Mode Toggle with Local Storage
const toggleDarkMode = document.querySelector('.dark-mode-toggle');

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for user's dark mode preference on page load
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggleDarkMode.textContent = 'Light Mode';
}

// Menu Toggle Functionality with Smooth Transition
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', navbar.classList.contains('active'));
});

// Show/Hide Sections Functionality with Transition
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.previousElementSibling;
    content.style.transition = 'max-height 0.3s ease'; // Add transition for smooth effect

    if (content.classList.contains('hidden')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.remove('hidden');
      button.textContent = 'Show Less';
    } else {
      content.style.maxHeight = '0';
      content.classList.add('hidden');
      button.textContent = 'Show More';
    }
  });
});

// Sticky Navigation on Scroll with Smooth Transition
const navMenu = document.querySelector('.navbar');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navMenu.style.top = '0';
  } else {
    navMenu.style.top = '-80px'; // Adjust this value to match your navbar height
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > 50) {
    navMenu.classList.add('sticky');
  } else {
    navMenu.classList.remove('sticky');
  }
});

// Lazy Loading Images with Intersection Observer and Placeholder
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const placeholder = document.createElement('div'); 
      placeholder.classList.add('image-placeholder'); // Add a placeholder while the image loads
      img.parentNode.insertBefore(placeholder, img);

      img.src = img.dataset.src;
      img.onload = () => {
        img.classList.remove('lazy');
        img.parentNode.removeChild(placeholder); // Remove the placeholder after the image loads
      };
      observer.unobserve(img);
    }
  });
});

imagesToLoad.forEach(img => imageObserver.observe(img));

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });

    // Close the mobile menu after clicking a link
    if (window.innerWidth < 768) {
      navbar.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Back to Top Button Functionality with Smooth Transition
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show Progress Bar with Gradient
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
  progressBar.style.background = `linear-gradient(to right, #00bfa5, #ffc107 ${scrollPercentage}%)`; // Add a gradient to the progress bar
});
