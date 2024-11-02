// JavaScript Part 1: Toggle Show More/Show Less Functionality
function toggleDetails(button) {
    const details = button.previousElementSibling;
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
        button.textContent = "Show Less";
    } else {
        details.style.display = "none";
        button.textContent = "Show More";
    }
}// JavaScript Part 2: Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}// JavaScript Part 3: Toggle Mobile Menu
document.getElementById("menuToggle").addEventListener("click", function () {
    const navigation = document.querySelector(".navigation ul");
    if (navigation.style.display === "none" || !navigation.style.display) {
        navigation.style.display = "flex"; // Adjusted for vertical alignment
        navigation.style.flexDirection = "column"; 
    } else {
        navigation.style.display = "none";
    }
});
