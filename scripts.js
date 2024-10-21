// Splash screen disappearance
window.addEventListener('load', () => {
  const splashScreen = document.querySelector('.splash-screen');
  splashScreen.style.opacity = 0; 
  setTimeout(() => {
    splashScreen.style.display = 'none'; 
  }, 1000); 
});


// Scroll Animation
const debounce = (func, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

const handleScroll = debounce(() => {
  const sections = document.querySelectorAll('.scroll-animate');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('scroll-visible');
    } else {
      section.classList.remove('scroll-visible');
    }
  });
}, 20);

window.addEventListener('scroll', handleScroll);

// Expand/Collapse Job Details
function toggleDetails(id) {
  const section = document.getElementById(id);
  const button = document.querySelector(`button[aria-controls="${id}"]`); 
  section.classList.toggle('visible');
  
  // Toggle ARIA attributes for accessibility
  if (section.classList.contains('visible')) {
    button.setAttribute('aria-expanded', 'true');
    section.setAttribute('aria-hidden', 'false');
  } else {
    button.setAttribute('aria-expanded', 'false');
    section.setAttribute('aria-hidden', 'true');
  }
}

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
  
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach
