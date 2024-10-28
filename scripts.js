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

    // Auto-Collapse Mobile Menu
    const mobileNavbarLinks = mobileNavbar.querySelectorAll("a");
    mobileNavbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavbar.style.display = "none";
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Scroll Spy for Active Section in Navigation
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

    // Animated Back-to-Top Button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Auto-Hide Navigation on Scroll Down
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            document.querySelector("header").style.top = "-60px";
        } else {
            document.querySelector("header").style.top = "0";
        }
        lastScroll = currentScroll;
    });

    // Section Fade-In Animation on Scroll
    const fadeInSections = document.querySelectorAll("section");
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
        fadeInObserver.observe(section);
    });

    // Interactive Scroll Progress Using Menu
    window.addEventListener("scroll", () => {
        let scrollPosition = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        document.querySelector(".navbar").style.background = `linear-gradient(to right, #345678 ${scrollPosition}%, #123456 ${scrollPosition}%)`;
    });

    // Page Load Animation
    document.body.classList.add("page-loaded");

    // Hover Effects for Navigation Items
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.05)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Reading Time Estimation
    const wordsPerMinute = 200;
    const textContent = document.body.textContent || "";
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    const readingTimeElement = document.createElement("div");
    readingTimeElement.textContent = `Estimated reading time: ${readingTime} min`;
    readingTimeElement.style.textAlign = "center";
    readingTimeElement.style.margin = "10px 0";
    document.body.insertBefore(readingTimeElement, document.body.firstChild);

    // Persistent Back-to-Top Button Position on Scroll
    window.addEventListener("scroll", () => {
        backToTopButton.style.transform = `translateY(${window.scrollY / 10}px)`;
    });

    // Browser Tab Activity Indicator
    let originalTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back soon!";
    });
    window.addEventListener("focus", () => {
        document.title = originalTitle;
    });
});
