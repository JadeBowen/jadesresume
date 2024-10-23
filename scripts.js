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
        });
    });

    // Find all read-less buttons and handle their click events
    const readLessButtons = document.querySelectorAll(".read-less-btn");
    
    readLessButtons.forEach(button => {
        button.addEventListener("click", function() {
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
});
