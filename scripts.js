document.addEventListener("DOMContentLoaded", function() {
    // Splash Screen Setup
    const splashScreen = document.getElementById('splash-screen');

    // Show splash screen on every visit, with a 2-second fade-out
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000); // Display splash screen for 2 seconds before fading out

    splashScreen.addEventListener('transitionend', () => {
        splashScreen.remove();
    });

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    hamburger.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Sticky Navigation on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
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

    // Expand/Collapse Read More for Job Details
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const readLessButtons = document.querySelectorAll(".read-less-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.nextElementSibling;
            moreContent.classList.add("show");
            this.classList.add("hide");
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.parentElement;
            moreContent.classList.remove("show");
            const readMoreButton = moreContent.previousElementSibling;
            readMoreButton.classList.remove("hide");
        });
    });

    // Lazy Load Images for Performance
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                self.unobserve(img);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
});document.addEventListener("DOMContentLoaded", function() {
    // Splash Screen Setup
    const splashScreen = document.getElementById('splash-screen');
    
    // Show splash screen only on the first visit
    if (!localStorage.getItem('visited')) {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            localStorage.setItem('visited', 'true'); // Mark as visited
        }, 2000); // Display splash screen for 2 seconds before fading out

        splashScreen.addEventListener('animationend', () => {
            splashScreen.remove();
        });
    } else {
        splashScreen.remove(); // Remove splash screen on subsequent visits
    }

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    hamburger.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
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

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Expand/Collapse Read More for Job Details
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const readLessButtons = document.querySelectorAll(".read-less-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.nextElementSibling;
            moreContent.classList.add("show");
            this.classList.add("hide");
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreContent = this.parentElement;
            moreContent.classList.remove("show");
            const readMoreButton = moreContent.previousElementSibling;
            readMoreButton.classList.remove("hide");
        });
    });

    // Lazy Load Images for Performance
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                self.unobserve(img);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
});
