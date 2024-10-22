window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Fade out the splash screen after 3 seconds
    setTimeout(() => {
        splash.style.transition = 'opacity 1.5s ease';
        splash.style.opacity = '0';
    }, 3000);

    // Ensure splash screen is completely hidden after fading
    setTimeout(() => {
        splash.style.display = 'none';  // Fully hide the splash screen
        mainContent.style.display = 'block';  // Display the main content
    }, 4500);  // Adjust timing to ensure smooth transition
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
