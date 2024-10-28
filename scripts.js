document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle Functionality
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Mobile Menu Toggle Functionality
    const menuToggleButton = document.querySelector(".menu-toggle");
    const mobileNavbar = document.createElement("div");
    mobileNavbar.className = "mobile-navbar";
    mobileNavbar.innerHTML = document.querySelector(".navbar").innerHTML;
    document.body.appendChild(mobileNavbar);

    menuToggleButton.addEventListener("click", function () {
        mobileNavbar.style.display = mobileNavbar.style.display === "block" ? "none" : "block";
    });

    // Show More/Show Less Toggle Functionality
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        const contentFull = button.previousElementSibling;
        contentFull.classList.add("hidden"); // Hide initially
        button.textContent = "Show More";

        button.addEventListener("click", function () {
            contentFull.classList.toggle("hidden");
            button.textContent = contentFull.classList.contains("hidden") ? "Show More" : "Show Less";
        });
    });
});
