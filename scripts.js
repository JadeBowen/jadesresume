document.addEventListener("DOMContentLoaded", function() {

    // Splash Screen Animation and Transition
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
    }, 3000); // Splash screen will stay for 3 seconds before fading out

    // Remove splash screen from the DOM after fade-out
    splashScreen.addEventListener('animationend', () => {
        splashScreen.style.display = 'none';
    });

    // Sticky Navbar (ensure it remains sticky)
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    // Read More/Read Less Functionality
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.nextElementSibling;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "block";
                this.style.display = "none";  // Hide the "Read More" button
            }
        });
    });

    const readLessButtons = document.querySelectorAll(".read-less-btn");
    readLessButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.parentElement;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "none";
                const readMoreButton = moreContent.previousElementSibling;
                if (readMoreButton && readMoreButton.classList.contains("read-more-btn")) {
                    readMoreButton.style.display = "inline-block";  // Show the "Read More" button again
                }
            }
        });
    });

});
