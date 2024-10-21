/* Global Styles */
body {
    font-family: 'Roboto', Arial, sans-serif;
    color: #ffffff;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.95) url('https://github.com/JadeBowen/jaderesume/blob/main/Screenshot_20241019_181724_Chrome.jpg?raw=true') no-repeat center center fixed;
    background-size: cover;
}

/* Splash Screen Styles */
.splash-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.splash-screen img.logo {
    width: 60%; /* Adjust the size for responsiveness */
    height: auto;
}

.fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
}

/* Navbar Styles */
.navbar {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
}

.navbar ul li {
    padding: 10px;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

/* About Me Section Styles */
#about {
    padding: 100px 20px 20px;
    text-align: center;
}

.about-details {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.headshot {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

/* Job Section Styles */
.job-section {
    margin: 20px 0;
}

.job-section h4 {
    margin-top: 10px;
}

/* Details Section Styles */
.details {
    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
}

.details.visible {
    display: block;
}

/* Skills and Certifications Sections Styles */
h2 {
    margin: 20px 0;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

/* Contact Section Styles */
#contact {
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin: 10px 0 5px;
}

input, textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
}

button {
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #005f73;
}

/* Social Media Share Styles */
#social-share {
    margin: 20px 0;
}

/* QR Code Section Styles */
#qr-codes {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.qr-row {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.qr-item {
    text-align: center;
}

/* Footer Styles */
footer {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}
