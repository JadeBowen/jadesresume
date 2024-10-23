/* General Settings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background: #0d0d0d;
  color: #e0e0e0;
  overflow-x: hidden;
}

a {
  color: #1db954;
  text-decoration: none;
}

a:hover {
  color: #1db954;
  text-shadow: 0px 0px 8px #1db954;
}

/* Fixed Navigation */
#fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  text-align: center;
  padding: 10px 0;
  display: flex;
  justify-content: center; /* Center the nav items */
}

#fixed-nav ul {
  list-style: none;
  display: flex;
  justify-content: center; /* Ensure items are centered */
  gap: 20px; /* Add space between items */
}

#fixed-nav li {
  display: inline;
}

#fixed-nav a {
  color: white;
  font-weight: bold;
}

/* About Me Section */
#about-me {
  padding: 60px 20px; /* Increased padding for more space */
  background-color: #0d0d0d;
  text-align: center;
}

.logo-banner {
  width: 100%;
  text-align: center;
  margin-bottom: 40px; /* More space below logo */
}

.banner-logo {
  width: 250px; /* Reduced size */
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .banner-logo {
    width: 150px; /* Smaller on mobile */
  }
}

.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.headshot {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px auto; /* Centering the headshot */
  display: block;
}

.intro {
  flex-grow: 1;
}

.contact-info {
  flex-grow: 1;
  text-align: right;
}

.contact-info p {
  margin-bottom: 10px;
  font-size: 1rem; /* Smaller font size for contact info */
}

/* Resume Section */
#resume {
  padding: 50px 20px; /* Increased padding for spacing */
}

.job-entry {
  margin-bottom: 50px; /* More space between job entries */
}

.job-entry h3 {
  font-size: 1.5rem;
}

.job-entry h4, .job-entry p {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.expanded-details {
  display: none;
}

/* Styling for the Read More and Read Less buttons */
.read-more {
  margin-top: 15px; /* More space above the button */
  padding: 10px 16px; /* More padding for better usability */
  background-color: #1db954;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.read-more:hover {
  background-color: #14833b;
}

/* Contact Card Section */
#contact-card {
  padding: 60px 20px;
  background-color: #181818;
  text-align: center;
}

.contact-card {
  background-color: #0d0d0d;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  color: #e0e0e0;
}

.contact-card h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.contact-card p {
  margin-bottom: 15px;
  font-size: 1rem; /* Reduced font size */
}

.contact-card a {
  color: #1db954;
  text-decoration: none;
}

.contact-card a:hover {
  text-shadow: 0px 0px 8px #1db954;
}

.contact-card i {
  margin-right: 8px; /* Added margin for better spacing of icons */
  font-size: 1.2rem;
}

/* vCard and Resume Button Styling */
#vcard-button, #download-resume {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #1db954;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s ease, transform 0.2s;
  width: 100%;  /* Ensure both buttons are the same width */
  max-width: 400px; /* Set a max width for both buttons */
  margin: 0 auto; /* Center the button */
}

#vcard-button:hover, #download-resume:hover {
  background-color: #14833b;
  transform: scale(1.05);
  box-shadow: 0px 0px 15px #1db954;  /* Same hover effect */
}

/* Footer Section with Button Spacing */
footer {
  background-color: #181818;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-buttons {
  display: flex;
  justify-content: center;
  gap: 20px; /* Added space between LinkedIn and Facebook buttons */
}

.footer-buttons button {
  padding: 10px 20px;
  background-color: #1db954;
  border: none;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.footer-buttons button:hover {
  background-color: #14833b;
  transform: scale(1.05);
  box-shadow: 0px 0px 15px #1db954;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }

  .headshot {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  .contact-info {
    text-align: center;
  }

  .banner-logo {
    width: 150px; /* Slightly smaller for mobile */
  }

  .contact-card {
    max-width: 90%;
  }

  #vcard-button, #download-resume {
    width: 90%;
    margin: 10px auto;
  }

  .contact-card h2 {
    font-size: 1.5rem;
  }

  .contact-card p {
    font-size: 1rem;
  }

  .contact-card i {
    font-size: 1rem;
  }
}
