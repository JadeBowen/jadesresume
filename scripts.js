document.addEventListener('DOMContentLoaded', function() {

    // Handle "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block'; // Show the details
                this.textContent = 'Read Less'; // Change the button text
            } else {
                details.style.display = 'none'; // Hide the details
                this.textContent = 'Read More'; // Reset the button text
            }
        });
    });

    // Handle download of Resume (PDF)
    const resumeButton = document.getElementById('download-resume');
    resumeButton.addEventListener('click', function() {
        window.open('https://github.com/JadeBowen/jadesresume/blob/main/Jade%20Bowen%20-%202024.pdf?raw=true', '_blank');
    });
});
