// Splash Screen Fade-out (with slight delay)
setTimeout(function() {
    document.getElementById('splash-screen').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
    }, 500); 
}, 3000); 

// Function to toggle job details using classList
function toggleDetails(jobId) {
  var details = document.getElementById(jobId);
  details.classList.toggle('show-details'); 
}

// Add event listeners to "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const jobId = button.getAttribute('onclick').match(/'([^']+)'/)[1]; 
    toggleDetails(jobId);
  });
});

// Integrate LinkedIn button functionality (opens in new tab)
document.getElementById('linkedin-connect').addEventListener('click', function() {
    window.open('https://linkedin.com/in/jadebowen', '_blank');
}); 
