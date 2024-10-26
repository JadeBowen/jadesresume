document.addEventListener("DOMContentLoaded", function() {
    // Splash Screen Setup
    const splashScreen = document.getElementById('splash-screen');

    // Show splash screen with a 2-second fade-out
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000);

    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    hamburger.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Expand/Collapse Read More for Job Details
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const readLessButtons = document.querySelectorAll(".read-less-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.nextElementSibling;
            moreContent.style.display = 'block';
            this.style.display = 'none';
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.parentElement;
            moreContent.style.display = 'none';
            moreContent.previousElementSibling.style.display = 'inline-block';
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
