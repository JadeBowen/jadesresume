// Ensure all elements are ready before scripts run
document.addEventListener('DOMContentLoaded', () => {

    // 1. Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) document.body.classList.add('dark-mode');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // 2. Mobile Hamburger Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
        navbar.style.transition = 'transform 0.3s ease-in-out';
    });

    // 3. Splash Screen Signature Animation
    const signatureCanvas = document.querySelector('#signature');
    if (signatureCanvas) {
        drawSignature(signatureCanvas); // Assuming a library or function is handling signature drawing
    }

    // 4. Smooth Scrolling for In-Page Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Show More/Show Less for Job History
    document.querySelectorAll('.toggle-job-btn').forEach(button => {
        button.addEventListener('click', () => {
            const jobEntry = button.closest('.experience-entry');
            const content = jobEntry.querySelector('.content-full');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Show Less';
            } else {
                content.style.display = 'none';
                button.textContent = 'Show More';
            }
        });
    });

    // 6. Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    // 7. Interactive Skill Bars
    const skillBars = document.querySelectorAll('.skill-bar');
    const showSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.fill');
                bar.style.width = bar.dataset.skillLevel + '%';
                observer.unobserve(entry.target);
            }
        });
    };
    const skillObserver = new IntersectionObserver(showSkills, { threshold: 0.5 });
    skillBars.forEach(bar => skillObserver.observe(bar));

    // 8. Lazy Load Animations for Sections
    const lazySections = document.querySelectorAll('section');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                lazyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    lazySections.forEach(section => lazyObserver.observe(section));

    // 9. Highlight Active Menu Section on Scroll
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.navbar a');
    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });

    // 10. Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
