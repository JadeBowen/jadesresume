document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) document.body.classList.add('dark-mode');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Mobile Hamburger Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
        navbar.style.transition = 'transform 0.3s ease-in-out';
        menuToggle.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                navbar.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    // Show More/Less Toggle for Sections
    document.querySelectorAll('.toggle-section-btn').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('section');
            const content = section.querySelector('.content-full');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Show Less';
                content.style.transition = 'max-height 0.3s ease-in-out';
            } else {
                content.style.display = 'none';
                button.textContent = 'Show More';
            }
        });
    });
    
    // Splash Screen with Signature Effect
    const splashScreen = document.querySelector('.splash-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
        }, 3000); 
    });
    
    // Scroll-triggered Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});// Interactive Skill Progress Bars
document.querySelectorAll('.skill-bar').forEach(bar => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = bar.getAttribute('data-level');
                bar.style.width = skillLevel + '%';
            }
        });
    }, { threshold: 0.5 });
    observer.observe(bar);
});

// Parallax Scrolling
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.getAttribute('data-speed') || 0.5;
        section.style.backgroundPositionY = `${window.scrollY * speed}px`;
    });
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Tooltip Hover for Icons
document.querySelectorAll('.icon[data-tooltip]').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = icon.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        // Position the tooltip
        const rect = icon.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltipRect.width / 2)}px`;
        tooltip.style.top = `${rect.top - tooltipRect.height - 8}px`;

        icon.addEventListener('mouseleave', () => tooltip.remove());
    });
});

// Highlight Active Menu Section on Scroll
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initial Section Collapse on Page Load
document.querySelectorAll('section .content-full').forEach(content => {
    content.style.display = 'none';
});
document.querySelectorAll('.toggle-section-btn').forEach(button => {
    button.textContent = 'Show More';
});
