// JavaScript for Splash Screen Animation and Read More/Less functionality

document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Animation
    const splashScreen = document.querySelector(".splash-screen");
    const signatureLogo = document.querySelector("#signature");

    window.onload = () => {
        setTimeout(() => {
            splashScreen.classList.add("fade-out");
            setTimeout(() => {
                splashScreen.style.display = "none";
            }, 1000); // Timeout to remove splash screen after fade out
        }, 5000); // Total time of signature animation before fade out
    };

    // Read More and Read Less functionality
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreContent = this.nextElementSibling;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "block";
                this.style.display = "none"; // Hide the "Read More" button
            }
        });
    });

    const readLessButtons = document.querySelectorAll(".read-less-btn");

    readLessButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreContent = this.parentElement;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "none";
                const readMoreButton = moreContent.previousElementSibling;
                if (readMoreButton && readMoreButton.classList.contains("read-more-btn")) {
                    readMoreButton.style.display = "inline-block"; // Show the "Read More" button again
                }
            }
        });
    });
});
