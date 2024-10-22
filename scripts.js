window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Splash screen fade out after 3 seconds
    setTimeout(() => {
        splash.style.opacity = '0';
        splash.style.transition = 'opacity 1.5s ease';
    }, 3000);

    // Ensure the splash screen is fully hidden after fading out
    splash.addEventListener('transitionend', () => {
        splash.style.display = 'none'; // Hide the splash screen
        mainContent.style.display = 'block'; // Show main content
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
