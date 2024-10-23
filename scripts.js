document.addEventListener('DOMContentLoaded', function() {

    // Handle "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                details.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });

    // Handle LinkedIn and Facebook share buttons
    const linkedinButton = document.querySelector('.footer-buttons button:nth-child(1)');
    const facebookButton = document.querySelector('.footer-buttons button:nth-child(2)');

    linkedinButton.addEventListener('click', function() {
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/JadeBowen/jadesresume', '_blank');
    });

    facebookButton.addEventListener('click', function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://github.com/JadeBowen/jadesresume', '_blank');
    });

    // Handle download of Resume (PDF)
    const resumeButton = document.getElementById('download-resume');
    resumeButton.addEventListener('click', function() {
        window.open('https://github.com/JadeBowen/jadesresume/blob/main/Jade%20Bowen%20-%202024.pdf?raw=true', '_blank');
    });

    // Handle download of vCard (Removed as per new requirements)
    const vcardButton = document.getElementById('download-vcard');
    if (vcardButton) {
        vcardButton.addEventListener('click', function() {
            window.open('https://github.com/JadeBowen/jadesresume/blob/main/Jade_Bowen.vcf', '_blank');
        });
    }
    
});
