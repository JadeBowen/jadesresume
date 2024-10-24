/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #1E1E1E;
    color: white;
}

/* Splash Screen */
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

#splash-screen img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

@media screen and (max-width: 768px) {
    #splash-screen img {
        width: 100%;
        height: auto;
    }
}

#splash-screen.fade-out {
    animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

/* Sticky Navbar */
.navbar {
    position: fixed; /* Ensure it's fixed at all times */
    top: 0;
    width: 100%;
    background-color: #333;
    z-index: 1000;
    padding: 15px 0;
    display: flex;
    justify-content: space-evenly;
}

.menu-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.menu-list li {
    text-align: center;
}

.menu-list a {
    text-decoration: none;
    color: #00FFFF;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
}

.menu-list a:hover {
    color: #8A2BE2;
}

/* Profile Section */
.profile-section {
    text-align: center;
    padding: 50px 0;
    margin-top: 100px; /* Ensure space is maintained under the sticky navbar */
}

.profile-image {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.text-box {
    margin: 20px auto;
    color: white;
    max-width: 600px;
}

h1, h2, h3, .section-title {
    color: #00FFFF;
    margin-bottom: 15px;
    text-align: center;
}

/* Smooth Transition for Read More/Read Less */
.more-content {
    display: none;
    opacity: 0;
    max-height: 0;
    transition: max-height 0.5s ease, opacity 0.5s ease;
}

.more-content.show {
    display: block;
    opacity: 1;
    max-height: 1000px; /* Large enough to reveal the full content */
}

button, .button {
    background-color: #00FFFF;
    color: #fff;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;
    display: block;
}

button:hover, .button:hover {
    background-color: #1E90FF;
}/* Experience Section */
.experience-section {
    padding: 50px 0;
}

.experience-card {
    margin-bottom: 20px;
}

h4 {
    color: #FFA500;
}

/* Certifications, Proficiencies, and Contact Info Adjustments */
.certifications-section, .proficiencies-section, .contact-section {
    padding: 30px 0;
    color: white;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
}

/* Contact Info Section - Add More Spacing */
.contact-card {
    margin: 30px 0;
}

.contact-card p {
    margin: 10px 0;
}

.contact-card a {
    color: #00FFFF;
    text-decoration: none;
}

.contact-card a:hover {
    color: #1E90FF;
}

/* QR Code Adjustments for Mobile */
.qr-code-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.qr-code-container img {
    margin: 0 10px;
    width: 90px;
    height: 90px;
    object-fit: contain;
}

.qr-code-container p {
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
}

.resume-download-btn {
    margin-top: 20px;
    padding: 15px;
    background-color: #00FFFF;
    color: #fff;
    text-align: center;
    display: block;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
}

.resume-download-btn:hover {
    background-color: #1E90FF;
    box-shadow: 0 0 8px #1E90FF;
}

/* Footer Section */
footer {
    background-color: #333;
    color: white;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

footer p {
    margin-bottom: 2px;
    text-align: center;
}

/* Media Queries for Responsive Design */
@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
    }

    .menu-list {
        width: 100%;
    }

    .contact-section, .certifications-section, .proficiencies-section, .text-box {
        max-width: 95%;
        padding: 15px;
    }

    .qr-code-container {
        flex-direction: column;
    }

    .qr-code-container img {
        margin-bottom: 15px;
    }

    footer .footer-container {
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    footer p {
        width: 100%;
        text-align: center;
    }
}

@media screen and (max-width: 480px) {
    .text-box, .certifications-section, .proficiencies-section, .contact-section {
        max-width: 100%;
    }

    .profile-image {
        width: 150px;
        height: 150px;
    }

    button, .button {
        font-size: 14px;
        padding: 8px 15px;
    }

    .footer p {
        display: inline-block;
        margin: 5px 10px;
    }

    .menu-list li {
        margin: 0 10px;
        text-align: center;
    }
}
