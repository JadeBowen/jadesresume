// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // Toggle function for mobile menu
    function toggleMenu() {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("show");
    }

    // Assign the toggle function to the menu button
    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

    // Show More/Show Less Toggle Functionality
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetContent = document.getElementById(this.getAttribute("data-target"));
            if (targetContent.classList.contains("hidden")) {
                targetContent.classList.remove("hidden");
                this.textContent = "Show Less";
            } else {
                targetContent.classList.add("hidden");
                this.textContent = "Show More";
            }
        });
    });

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
