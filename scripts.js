// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Splash Screen Animation
    const splashScreen = document.getElementById("splash-screen");
    const fadeText = document.querySelector(".fade-in");
    setTimeout(() => {
        splashScreen.style.opacity = 0;
        splashScreen.style.visibility = "hidden";
    }, 4000); // Delay splash screen fade-out by 4 seconds

    // Show More/Show Less Toggle Functionality
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetContent = document.getElementById(this.getAttribute("data-target"));
            if (targetContent.classList.contains("hidden")) {
                targetContent.classList.remove("hidden");
                this.textContent = "Show Less";
                this.setAttribute("aria-expanded", "true");
            } else {
                targetContent.classList.add("hidden");
                this.textContent = "Show More";
                this.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
