/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    color: #ffffff;
    background: url('https://github.com/JadeBowen/jadesresume/blob/main/network-enot-poloskun.jpg?raw=true') no-repeat center center fixed;
    background-size: cover;
}

header {
    position: sticky;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    text-align: center;
}

.navbar a {
    color: #00FFFF;
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px; /* Slightly increased font size */
}

.about-section {
    text-align: center;
    padding: 20px;
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px auto;
}

.skills-grid, .achievements-grid, .experience-grid {
    display: grid;
    gap: 15px;
}

.skill-card, .achievement-card, .experience-entry {
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
}

.qr-code {
    max-width: 100px;
    display: block;
    margin: 15px auto;
}

.download-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 16px;
    color: #ffffff;
    background-color: #00CCCC;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
}

.download-button:hover {
    background-color: #1E90FF;
}

/* Splash Screen Styling */
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 15vh; /* Significantly reduced height */
    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent dark background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 1s ease, visibility 1s ease; /* Smooth fade-out transition */
}

#splash-screen.fade-out {
    opacity: 0;
    visibility: hidden;
}

@media (max-width: 768px) {
    .skills-grid, .achievements-grid, .experience-grid {
        grid-template-columns: 1fr;
    }
    .navbar a {
        font-size: 16px;
    }
}
