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

    // Interactive Timeline (using a JavaScript timeline library)
    const timelineItems = [
        { id: 1, content: 'SBA Tower Technician', start: '2002-05-01', end: '2005-11-30' },
        { id: 2, content: 'Construction Manager at MasTec', start: '2018-01-01', end: '2020-04-30' },
        // Additional job entries can be added here
    ];
    const timelineContainer = document.getElementById('timeline-container');
    const timeline = new vis.Timeline(timelineContainer, timelineItems, {});

    // Show More/Less Toggle for Job Entries
    document.querySelectorAll('.toggle-job-btn').forEach(button => {
        button.addEventListener('click', () => {
            const jobEntry = button.closest('.experience-entry');
            const content = jobEntry.querySelector('.content-full');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                content.style.transition = 'max-height 0.3s ease-in-out';
                button.textContent = 'Show Less';
            } else {
                content.style.display = 'none';
                button.textContent = 'Show More';
            }
        });
    });

    // Scroll-triggered Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-bar');
    window.addEventListener('scroll', () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                bar.classList.add('fill'); // Adds a class to animate filling the skill bar
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
