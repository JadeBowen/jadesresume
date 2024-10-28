document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Mobile Menu Toggle with Auto-Collapse
    const menuToggleButton = document.querySelector(".menu-toggle");
    menuToggleButton.textContent = "Navigation";
    const mobileNavbar = document.createElement("div");
    mobileNavbar.className = "mobile-navbar";
    mobileNavbar.innerHTML = document.querySelector(".navbar").innerHTML;
    document.body.appendChild(mobileNavbar);

    menuToggleButton.addEventListener("click", function () {
        mobileNavbar.style.display = mobileNavbar.style.display === "block" ? "none" : "block";
    });

    // Smooth Scroll and Scroll Spy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Scroll Spy Highlight for Active Section
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Back-to-Top Button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        backToTopButton.style.opacity = window.scrollY > 300 ? "1" : "0";
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Section Fade-In Animation on Scroll
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(section => {
        fadeInObserver.observe(section);
    });

    // Skills Chart Placeholder (Dynamic Updates with Placeholder Chart Code)
    document.querySelector(".skills-chart").addEventListener("click", function () {
        alert("Skills chart interactivity under development!");
    });
});
