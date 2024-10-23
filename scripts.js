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
  } else {
    details.style.display = 'none';  // Hide details
    button.textContent = 'Read More';  // Change button text back
  }
}

// Share Resume on LinkedIn
function shareOnLinkedIn() {
  const shareURL = window.location.href;  // Get current page URL
  const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareURL)}`;
  
  // Open the LinkedIn share window
  window.open(linkedinShareURL, '_blank', 'width=600,height=400');
}

// Share Resume on Facebook
function shareOnFacebook() {
  const shareURL = window.location.href;  // Get current page URL
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`;
  
  // Open the Facebook share window
  window.open(facebookShareURL, '_blank', 'width=600,height=400');
}

// vCard Download Function
function downloadVCard() {
  window.open('path_to_vcard/Jade_Bowen_Contact.vcf', '_blank');
}

// Download Resume PDF
document.getElementById('download-button').addEventListener('click', function() {
  window.open('path_to_your_resume.pdf', '_blank');
});
