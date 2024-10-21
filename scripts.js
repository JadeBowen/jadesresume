// Splash Screen Fade Out and Play Audio
window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    
    // Ensure splash screen fades out after 2 seconds
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 3000);  // Adjust for 3 seconds display
});

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
