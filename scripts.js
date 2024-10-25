document.addEventListener("DOMContentLoaded", function() {

    // Splash Screen Animation and Transition
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 2000); // Adjusted for quicker load on mobile devices

    splashScreen.addEventListener('animationend', () => {
        splashScreen.remove(); 
    });

    // Pin Navbar at the Top
    const navbar = document.querySelector('.navbar');
    navbar.classList.add("sticky"); // Ensure it's always sticky

    // Read More/Read Less Functionality with Smooth Transitions
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.nextElementSibling;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.classList.add("show");
                this.classList.add("hide");
            }
        });
    });

    const readLessButtons = document.querySelectorAll(".read-less-btn");
    readLessButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.parentElement;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.classList.remove("show");
                const readMoreButton = moreContent.previousElementSibling;
                if (readMoreButton && readMoreButton.classList.contains("read-more-btn")) {
                    readMoreButton.classList.remove("hide");
                }
            }
        });
    });

    // Lazy load images for performance optimization
    const images = document.querySelectorAll('img');
    const config = {
        rootMargin: '0px 0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function loadImage(image) {
        const src = image.getAttribute('data-src');
        if (!src) { return; }
        image.src = src;
    }

});
