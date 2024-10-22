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
    details.style.display = 'block';  // Show details
    button.textContent = 'Read Less';  // Change button text
    button.classList.add('expanded');  // Optional: Add class for extra styling if needed
  } else {
    details.style.display = 'none';  // Hide details
    button.textContent = 'Read More';  // Change button text back
    button.classList.remove('expanded');  // Remove class
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
  // Replace 'path_to_your_resume.pdf' with the actual path to your resume PDF file
  window.open('path_to_your_resume.pdf', '_blank');
});
