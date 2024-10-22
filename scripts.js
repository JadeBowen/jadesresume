window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Splash screen fade out after 3 seconds
    setTimeout(() => {
        splash.style.opacity = '0';
        splash.style.transition = 'opacity 1.5s ease';
    }, 3000);

    // Show main content after splash screen fades out
    setTimeout(() => {
        splash.classList.add('hidden');
        mainContent.style.display = 'block';
    }, 4500); 
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
