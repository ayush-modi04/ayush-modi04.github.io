// Particles.js for stars
particlesJS("space-background", {
    particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        move: { speed: 0.4, random: true },
        line_linked: { enable: false },
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
    },
});

// Floating Astronaut Effect
document.addEventListener("mousemove", function(event) {
    const astronaut = document.getElementById("astronaut");
    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;
    
    astronaut.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
});

// 3D Rotating Earth using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("planetCanvas"), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("https://threejs.org/examples/textures/earth_atmos_2048.jpg");

const earthGeometry = new THREE.SphereGeometry(2, 50, 50);
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

scene.add(earth);
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);
camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();
