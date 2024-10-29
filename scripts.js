body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    --primary-color: #007bff; /* A nice blue */
    --bg-color: #f8f8f8; /* Light background */
    --text-color: #333; /* Dark text */
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
}

body.dark-mode {
    --primary-color: #6c757d; /* A more muted blue for dark mode */
    --bg-color: #222; /* Dark background */
    --text-color: #eee; /* Light text */
    color: var(--text-color);
}

h1, h2, h3 {
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    animation: fadeIn 1s ease forwards; /* Fade in animation */
    text-align: center; /* Center the name */
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    position: relative;
    cursor: pointer; /* Indicate it's clickable */
}

h2::before { /* Underline effect on hover */
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

h2:hover::before {
    width: 100px;
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
}

a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3; /* Slightly darker blue on hover */
}

p {
    margin-bottom: 1.2rem;
    word-spacing: normal; /* Fix for odd spacing */
    letter-spacing: normal;
}

strong {
    font-weight: 600;
}

ul {
    list-style: disc;
    padding-left: 40px;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.icon {
    margin-right: 8px;
    transition: transform 0.3s ease;
}

.icon:hover { /* Subtle rotate and scale on hover */
    transform: rotate(20deg) scale(1.1);
}

.icon[data-tooltip] {
    position: relative;
    cursor: help;
}

.icon[data-tooltip]::after { /* Tooltip styling */
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;
}

.icon[data-tooltip]:hover::after {
    opacity: 1;
    visibility: visible;
}

html {
    scroll-behavior: smooth; /* Smooth scrolling for anchor links */
}

.profile-photo,
.qr-code {
    max-width: 300px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.3s ease;
    filter: grayscale(0.5); /* Slight grayscale effect */
}

.profile-photo:hover,
.qr-code:hover {
    transform: scale(1.05);
    filter: grayscale(0); /* Remove grayscale on hover */
}
