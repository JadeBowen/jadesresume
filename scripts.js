// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add click event listeners to each toggle button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.getAttribute('data-target'));
        
        // Toggle the 'show' class to expand or collapse the section
        if (target.classList.contains('show')) {
            target.classList.remove('show');
            button.textContent = 'Show More'; // Change button text when collapsed
        } else {
            target.classList.add('show');
            button.textContent = 'Show Less'; // Change button text when expanded
        }
    });
});
