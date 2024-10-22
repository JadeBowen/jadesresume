// Splash Screen Fade-out
setTimeout(function() {
    document.getElementById('splash-screen').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
    }, 500);
}, 3000); 

// Function to simulate resume download (for now)
document.getElementById('download-resume').addEventListener('click', function() {
    alert("Resume download functionality will be added soon!");
});

// Temporary functions for Contact Me and LinkedIn buttons
document.getElementById('contact-me').addEventListener('click', function() {
    alert("Contact functionality will be added soon!");
});

document.getElementById('linkedin-connect').addEventListener('click', function() {
    // For now, just open the LinkedIn profile in a new tab
    window.open('https://linkedin.com/in/jadebowen', '_blank');
});

// Function to toggle job details
function toggleDetails(jobId) {
  var details = document.getElementById(jobId);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
