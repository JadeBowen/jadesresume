// Splash Screen Fade Out and Play Audio
window.addEventListener('load', function() {
    const splash = document.querySelector('.splash-screen');
    const audio = document.getElementById('whoosh-sound');

    // Play the whoosh sound if available
    if (audio) {
        audio.play();
    }

    // Ensure splash screen fades out after 2 seconds
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 2000);  // Fade out after 2 seconds
});

// Toggle Resume Details for Collapsible Job Descriptions
function toggleDetails(id) {
    const section = document.getElementById(id);
    section.classList.toggle('visible');
}

// Scroll Animations for Section Visibility
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => {
        const triggerBottom = window.innerHeight * 0.85;
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('scroll-visible');
        } else {
            section.classList.remove('scroll-visible');
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced 3D Animations (Three.js) - Optional if required
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 400);
document.getElementById('webgl-canvas').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
