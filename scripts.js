// JavaScript for Read More and Read Less functionality
document.addEventListener("DOMContentLoaded", function () {

    // Find all read-more buttons and handle their click events
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Show the additional content
            const moreContent = this.nextElementSibling;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "block";
                this.style.display = "none";  // Hide the "Read More" button
            }
        });
    });

    // Find all read-less buttons and handle their click events
    const readLessButtons = document.querySelectorAll(".read-less-btn");

    readLessButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Hide the additional content
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

    // Smooth scroll for the sticky menu
    const menuLinks = document.querySelectorAll(".menu-list a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjusting for the height of the sticky menu
                    behavior: "smooth"
                });
            }
        });
    });

    // Splash screen logic
    const splash = document.querySelector(".splash-screen");
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = 0;
            setTimeout(() => splash.remove(), 1000); // Fully remove the splash after fade-out
        }, 3000); // Change this duration if you want to adjust how long the splash stays visible
    }
});
