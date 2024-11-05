// JavaScript for Show More / Show Less functionality

document.addEventListener("DOMContentLoaded", () => {
    // Function to initialize Show More buttons
    const initializeShowMoreButtons = () => {
        // For Mission, Impact, and Professional Summary sections
        const sections = document.querySelectorAll(".toggle-section");
        sections.forEach(section => {
            const button = section.querySelector(".show-more-btn");
            const content = section.querySelector(".full-content");

            // Display only the first sentence by default
            content.style.display = "none";

            button.addEventListener("click", () => {
                if (content.style.display === "none") {
                    content.style.display = "block";
                    button.textContent = "Show Less";
                } else {
                    content.style.display = "none";
                    button.textContent = "Show More";
                }
            });
        });

        // For Professional Experience entries
        const jobEntries = document.querySelectorAll(".job-entry");
        jobEntries.forEach(entry => {
            const button = entry.querySelector(".show-more-btn");
            const fullDetails = entry.querySelector(".full-job-details");

            // Show only the first bullet point by default
            fullDetails.style.display = "none";

            button.addEventListener("click", () => {
                if (fullDetails.style.display === "none") {
                    fullDetails.style.display = "block";
                    button.textContent = "Show Less";
                } else {
                    fullDetails.style.display = "none";
                    button.textContent = "Show More";
                }
            });
        });
    };

    initializeShowMoreButtons();
});// JavaScript for Header Interactivity & Smooth Scrolling

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll functionality for all menu links
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Offset for header
                    behavior: "smooth"
                });
            }
        });
    });

    // Adjust header behavior on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});// JavaScript for Lazy Loading and Show More/Show Less Toggle Functionality

document.addEventListener("DOMContentLoaded", () => {
    // Lazy loading for images
    const lazyImages = document.querySelectorAll("img.lazy");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // "Show More" and "Show Less" functionality for expandable sections
    const expandableSections = document.querySelectorAll(".expandable-section");
    expandableSections.forEach(section => {
        const button = section.querySelector(".toggle-button");
        const fullContent = section.querySelector(".full-content");

        button.addEventListener("click", () => {
            if (fullContent.classList.contains("hidden")) {
                fullContent.classList.remove("hidden");
                button.textContent = "Show Less";
            } else {
                fullContent.classList.add("hidden");
                button.textContent = "Show More";
            }
        });
    });
});// JavaScript for Smooth Scrolling, Back-to-Top Button, and Final Enhancements

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Back-to-top button functionality
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Additional Mobile-Specific Adjustments
    const toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const expandableContent = button.previousElementSibling;
            expandableContent.classList.toggle("expanded");

            // Toggle button text between "Show More" and "Show Less"
            button.textContent = expandableContent.classList.contains("expanded")
                ? "Show Less"
                : "Show More";
        });
    });
});
