window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Splash screen fade out after 3 seconds
    setTimeout(() => {
        splash.style.opacity = '0'; // Fade out the splash screen
        splash.style.transition = 'opacity 1.5s ease'; // Ensure smooth transition
    }, 3000);

    // Once the transition ends, hide the splash screen and show the main content
    splash.addEventListener('transitionend', () => {
        splash.style.display = 'none';  // Fully hide the splash screen
        mainContent.style.opacity = '1';  // Make main content visible with fade-in effect
    });
});
