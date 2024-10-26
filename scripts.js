document.addEventListener("DOMContentLoaded", function() {
    // Splash Screen Setup
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000);
    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });

    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.menu-list');
    
    hamburger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('menu-open');
    });

    document.querySelectorAll('.menu-list a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            dropdownMenu.style.display = 'none';
        });
    });

    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.nextElementSibling;
            moreContent.style.display = moreContent.style.display === 'block' ? 'none' : 'block';
            this.textContent = moreContent.style.display === 'block' ? 'Show Less' : 'Show More';
        });
    });

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
