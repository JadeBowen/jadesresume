/* Theme Variables and Basic Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    --primary-color: #007bff;
    --secondary-color: #6c757d; /* A contrasting color for accents */
    --bg-color: #f8f8f8;
    --text-color: #333;
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    background-color: #222; /* Start in dark mode */
}

body.light-mode { /* Class for light mode */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --bg-color: #f8f8f8;
    --text-color: #333;
    color: var(--text-color);
    background-color: #f8f8f8; /* Light background */
}

/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Montserrat:wght@400;600&family=Lato:wght@400;700&display=swap');

h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    animation: fadeIn 1s ease forwards;
    text-align: center;
}

h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    cursor: pointer;
}

h3 {
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    margin-bottom: 0.8rem;
}

p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
}

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--secondary-color);
}/* Container and Icon Styles */
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.icon {
    margin-right: 8px;
    transition: transform 0.3s ease;
}

.icon:hover {
    transform: rotate(20deg) scale(1.1);
}

/* Profile Photo Styling */
.profile-photo {
    max-width: 300px;
    height: auto;
    display: block;
    margin: 0 auto 20px auto; /* Added margin-bottom */
    transition: transform 0.3s ease;
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.profile-photo:hover {
    transform: scale(1.05);
}

/* Basic Header Styling */
header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
}

.light-mode header {
    background-color: #f8f8f8; /* Light background for header */
    color: #333; /* Dark text color for header */
}

/* Menu Toggle Button */
.menu-toggle {
    background-color: var(--primary-color); /* Button appearance */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    position: relative;
    z-index: 102; /* Ensure button is on top */
}

.menu-toggle:hover {
    background-color: var(--secondary-color);
}/* Navbar Styles */
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar a {
    color: #fff;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.navbar a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.navbar a:focus,
.navbar a:target {
    background-color: rgba(255, 255, 255, 0.3);
    outline: none;
}

/* Mobile Menu */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .navbar {
        display: none; /* Initially hide the navbar on mobile */
        flex-direction: column;
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #333;
        height: auto;
        overflow-y: auto;
        transition: transform 0.3s ease;
        z-index: 100;
    }

    .navbar.show {
        display: flex; /* Show the navbar when the toggle is clicked */
    }

    .navbar a {
        display: block;
        margin: 10px 0;
        text-align: center;
    }

    header { /* Align hamburger menu and dark mode toggle */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem; /* Add some horizontal padding */
    }

    .dark-mode-toggle {
        top: 10px; /* Align with the hamburger menu */
    }
}/* Dark Mode Toggle Button */
.dark-mode-toggle {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    z-index: 102; /* Ensure button is on top */
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.dark-mode-toggle i {
    transition: transform 0.3s ease;
}

.dark-mode-toggle:hover {
    background-color: var(--secondary-color);
    transform: rotate(15deg); /* Rotate the icon on hover */
}

/* Show More/Less Toggle Buttons */
.toggle-section-btn,
.toggle-job-btn {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 20px auto; /* Centered with increased margin */
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-family: 'Lato', sans-serif; /* Font alignment with job titles */
}

.toggle-section-btn:hover,
.toggle-job-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}/* General Section Styling */
section {
    padding: 40px 0;
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 60px; /* Spacing between sections */
}

.light-mode section {
    background-color: rgba(248, 248, 248, 0.8); /* Light background for sections */
}

.section-content {
    text-align: left;
}

/* Achievements and Skills Grid */
#achievements ul,
#skills .skills-chart,
#certifications ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Download Button */
.download-btn {
    display: inline-block;
    background-color: #28a745;
    color: #fff;
    padding: 12px 20px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.download-btn:hover {
    background-color: #218838;
    transform: translateY(-2px); /* Slight lift effect */
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    margin-top: 40px;
    transition: background-color 0.3s ease;
}

.light-mode footer {
    background-color: #f8f8f8; /* Light background for footer */
    color: #333; /* Dark text color for footer */
}

/* Back to Top Button */
#back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 0.3s ease, transform 0.2s ease;
}

#back-to-top:hover {
    opacity: 1;
    transform: translateY(-2px);
}

/* Scroll Progress Indicator */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background-color: var(--primary-color);
    z-index: 98;
    transition: width 0.3s ease;
}
