window.addEventListener('load', function() {
    const mainContent = document.querySelector('.main-content');
    mainContent.style.display = 'block'; // Show main content immediately on page load
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
