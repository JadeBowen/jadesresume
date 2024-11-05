# Jade Bowen - Resume Portfolio

## Welcome!

This is the official resume portfolio of **Jade Bowen**, a Telecommunications and Construction Professional with over 21 years of experience in wireless communication systems, project management, and fiber optics.

### Table of Contents
- [About Me](#about-me)
- [Resume](#resume)
- [Certifications](#certifications)
- [Skills](#skills)
- [Contact Info](#contact-info)

---

## About Me
From an early age, I was captivated by telecommunications... (add more about your background and journey)

---

## Resume
Here is my full professional resume, outlining my career, skills, and accomplishments.

---

## Certifications
- OSHA 10 & 30 Certified
- ComTrain Certified Instructor (Tower Rescue and Rope Access)
- First Aid & CPR Certified

---

## Skills
- Telecom Tower Construction and Maintenance
- LTE and 5G Network Upgrades
- Wireless Communication Systems

---

## Contact Info
- **Phone**: [208-371-0647](tel:2083710647)
- **Email**: [Jade.Bowen.career@gmail.com](mailto:Jade.Bowen.career@gmail.com)
- **LinkedIn**: [linkedin.com/in/jadebowen](https://linkedin.com/in/jadebowen)
- **GitHub**: [github.com/JadeBowen](https://github.com/JadeBowen)



Jade Bowen - Professional Portfolio

This repository contains the source code for Jade Bowen's professional portfolio website, built to showcase skills, work experience, and achievements in telecommunications, construction, and project management. The site emphasizes accessibility, responsive design, interactivity, and optimized performance across both mobile and desktop platforms.

Table of Contents

Project Overview

Technologies Used

Installation & Setup

Features

Code Structure

CSS Structure & Enhancements

JavaScript Functionality

Accessibility & Performance

Future Improvements

License



---

Project Overview

The portfolio provides a clean, professional, and user-friendly interface to highlight Jade Bowen's career and qualifications. Key goals include:

Responsive design for mobile and desktop

Clear and accessible navigation

Interactive elements like smooth scrolling, collapsible sections, lazy-loaded images, and scroll-reveal animations


Technologies Used

HTML for structured and semantic content

CSS for responsive styling, animations, and layout

JavaScript for smooth scrolling, collapsible sections, and interactivity



---

Installation & Setup

1. Clone the repository:

git clone https://github.com/JadeBowen/jadesresume.git


2. Open the index.html file directly in a web browser to view the portfolio.


3. Optional: If you want to run a local server for testing, you can use a tool like Live Server in VSCode or run a simple Python HTTP server:

python -m http.server 8000




---

Features

Sticky Navigation: The header stays visible as users scroll, improving navigation on longer pages.

Smooth Scrolling: Smooth transitions between internal links for a polished user experience.

Mobile-Responsive Accordion: Work experience and mission sections are collapsible on mobile but expanded by default on desktop.

Lazy Loading: Images load only when in the viewport, optimizing page performance.

Scroll Reveal Animations: Content sections fade into view as the user scrolls, adding subtle visual interest.

Back-to-Top Button: Appears after scrolling to a certain point, allowing quick return to the top of the page.



---

Code Structure

HTML: index.html contains all content, using semantic tags for SEO and accessibility.

CSS: styles.css manages layout, typography, responsive adjustments, and animations.

JavaScript: scripts.js includes smooth scrolling, lazy loading, back-to-top logic, and responsive accordions.


Key Sections in index.html

Header: Contains navigation links and contact information.

About Me: Includes a profile description and a professional headshot.

Mission & Impact Statements: Clearly defined statements reflecting professional goals and impact.

Professional Experience: An accordion-style display of work history.

Skills & Proficiencies: A grid layout showcasing key skills, with tooltips for details.

Resume Download Section: Buttons to download different resume versions.

Footer: Simplified with only essential contact information and social links.



---

CSS Structure & Enhancements

Global Styling: Base font size, colors, and container widths are defined for consistency.

Responsive Layouts: Flexbox and Grid are used for section layouts that adapt to different screen sizes.

Colors and Themes: CSS variables define accent colors, improving maintainability and consistency.

Animations:

Transitions: Subtle transitions on hover for buttons, links, and cards.

Keyframes: Scroll reveal and back-to-top button animations create a polished user experience.


Reusable Classes:

.highlighted-text: Highlights important text.

.button-style: Common styles for buttons in the download section.

.section-spacing: Consistent padding and spacing across sections.




---

JavaScript Functionality

Smooth Scrolling with Error Handling: Smoothly scrolls to anchor links, with error logging if the target section is missing.

Back-to-Top Button Logic: Toggles visibility of the back-to-top button based on scroll position.

Accordion Sections:

Mobile-Only: Collapsible for mobile, always expanded on desktop.

ARIA Attributes: Improves accessibility by marking expanded/collapsed states.


Lazy Loading Images: Uses Intersection Observer to load images only when visible.

Scroll Reveal Animation: Fades in elements as they enter the viewport.


Functions in scripts.js

setupAccordion(): Initializes the accordion functionality for mobile.

adjustAccordionForDevice(): Adjusts accordion behavior based on screen size.

setupLazyLoading(): Implements lazy loading for images marked with data-src.

scrollRevealAnimation(): Observes elements with .scroll-reveal class for scroll reveal effects.

toggleBackToTopButton(): Controls back-to-top button visibility based on scroll.



---

Accessibility & Performance

1. ARIA Labels and Attributes: Ensures interactive elements like the accordion and buttons are accessible to screen readers.


2. Keyboard Navigation: Focusable elements are logically organized, making the site navigable via keyboard.


3. Image Optimization: Lazy loading defers offscreen images, improving initial load times.


4. Minified CSS and JavaScript: Reduces file sizes for faster loading.




---

Future Improvements

Consider adding the following to enhance the project:

Dark Mode Toggle: Provide a dark/light theme switcher for user preference.

Form Section: Add a contact form for direct inquiries.

Analytics: Integrate Google Analytics to track visitor engagement.

Unit Tests: Use Jest or similar frameworks to create unit tests for JavaScript functions.



---

License

This project is licensed under the MIT License.
