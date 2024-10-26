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
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu on link click for smooth navigation
    document.querySelectorAll('.menu-list a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            dropdownMenu.style.display = 'none';
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible Sections and Job Entries
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            const isVisible = details.style.display === 'block';

            details.style.display = isVisible ? 'none' : 'block';
            this.textContent = isVisible ? 'Show Details' : 'Hide Details';
        });
    });

    // Scroll to Top Button
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
