document.addEventListener("DOMContentLoaded", function() {
    // Splash Screen Setup
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000);
    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.menu-list');
    
    hamburger.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close menu on link click
    document.querySelectorAll('.menu-list a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            dropdownMenu.style.display = 'none';
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
