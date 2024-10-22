// Splash Screen
window.onload = function() {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.display = 'none';
  }, 2000); // Display the splash screen for 2 seconds
};

// Smooth Scrolling for Fixed Navigation
document.querySelectorAll('#fixed-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Offset for fixed nav height
      behavior: 'smooth'
    });
  });
});

// Expand Job Details (Read More)
function expandJobDetails(button) {
  const details = button.nextElementSibling;
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    button.textContent = 'Read Less';
    button.classList.add('expanded');
  } else {
    details.style.display = 'none';
    button.textContent = 'Read More';
    button.classList.remove('expanded');
  }
}

// Share Resume Functionality
function shareResume() {
  const shareURL = window.location.href;
  const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${shareURL}`;
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}`;

  // Open LinkedIn or Facebook sharing window (LinkedIn is used here for demonstration)
  window.open(linkedinShareURL, '_blank');
}

// Download Resume PDF
document.getElementById('download-button').addEventListener('click', function() {
  // Make sure to replace 'path_to_your_resume.pdf' with the actual path to your resume PDF file
  window.open('path_to_your_resume.pdf', '_blank');
});
