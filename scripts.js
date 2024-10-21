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
  section.classList.toggle('visible');
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

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    const lazyLoadFallback = () => {
      lazyImages.forEach((img) => {
        img.src = img.dataset.src;
      });
    };
    window.addEventListener("scroll", lazyLoadFallback);
    window.addEventListener("resize", lazyLoadFallback);
  }
});
// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  
  fetch('your-server-endpoint', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    alert('Your message has been sent!');
  })
  .catch(error => {
    alert('There was an error sending your message. Please try again.');
  });
});
