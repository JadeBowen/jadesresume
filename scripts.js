// JavaScript for Read More and Read Less functionality
document.addEventListener("DOMContentLoaded", function() {
    
    // Find all read-more buttons and handle their click events
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Show the additional content
            const moreContent = this.nextElementSibling;
            if (moreContent && moreContent.classList.contains("more-content")) {
                moreContent.style.display = "block";
                this.style.display = "none";  // Hide the "Read More" button
            }

            // Smooth transition
            moreContent.style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                opacity += 0.1;
                moreContent.style.opacity = opacity;
                if (opacity >= 1) clearInterval(fadeIn);
            }, 50);
        });
    });

    // Find all read-less buttons and handle their click events
    const readLessButtons = document.querySelectorAll(".read-less-btn");
    
    readLessButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Hide the additional content
            const moreContent = this.parentElement;
            if (moreContent && moreContent.classList.contains("more-content")) {
                const fadeOut = setInterval(() => {
                    moreContent.style.opacity -= 0.1;
                    if (moreContent.style.opacity <= 0) {
                        moreContent.style.display = "none";
                        clearInterval(fadeOut);
                    }
                }, 50);
                
                const readMoreButton = moreContent.previousElementSibling;
                if (readMoreButton && readMoreButton.classList.contains("read-more-btn")) {
                    readMoreButton.style.display = "inline-block";  // Show the "Read More" button again
                }
            }
        });
    });

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
