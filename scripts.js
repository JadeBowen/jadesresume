// "Show More / Show Less" Functionality
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.getElementById(button.getAttribute("data-target"));
            if (target.classList.contains("hidden")) {
                target.classList.remove("hidden");
                button.textContent = "Show Less";
            } else {
                target.classList.add("hidden");
                button.textContent = "Show More";
            }
        });
    });
});

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
