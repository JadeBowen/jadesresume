function toggleDetails(button) {
    const details = button.previousElementSibling;
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
        button.textContent = "Show Less";
    } else {
        details.style.display = "none";
        button.textContent = "Show More";
    }
}

// Additional Show More/Show Less for Philosophy section specific areas
function togglePhilosophySection(button) {
    const section = button.previousElementSibling;
    if (section.style.display === "none" || !section.style.display) {
        section.style.display = "block";
        button.textContent = "Show Less";
    } else {
        section.style.display = "none";
        button.textContent = "Show More";
    }
}function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}document.getElementById("menuToggle").addEventListener("click", function () {
    const navigation = document.querySelector(".navigation ul");
    if (navigation.style.display === "none" || !navigation.style.display) {
        navigation.style.display = "flex"; // Changed to 'flex' for proper alignment
        navigation.style.flexDirection = "column"; // Stack vertically on mobile
    } else {
        navigation.style.display = "none";
    }
});// Ensuring all toggles apply across Experience and Philosophy sections
document.querySelectorAll(".toggle-button").forEach(button => {
    button.addEventListener("click", function () {
        toggleDetails(button);
    });
});
