// Efecto de partículas en el fondo
const background = document.querySelector('.background');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
    background.appendChild(particle);

    // Eliminar la partícula después de que termine la animación
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Generar partículas cada 300ms
setInterval(createParticle, 300);

// Efecto de scroll suave
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    background.style.transform = `translateY(${scrollY * 0.5}px)`;
});


const particlesContainer = document.getElementById('particles-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Posición aleatoria
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Tamaño aleatorio
    const size = Math.random() * 10 + 5; // Entre 5px y 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Duración de la animación aleatoria
    const duration = Math.random() * 10 + 5; // Entre 5s y 15s
    particle.style.animationDuration = `${duration}s`;

    // Agregar la partícula al contenedor
    particlesContainer.appendChild(particle);

    // Eliminar la partícula después de que termine la animación
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Generar partículas cada 500ms
setInterval(createParticle, 500);

// Animación de movimiento aleatorio
const particles = document.querySelectorAll('.particle');

particles.forEach(particle => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;

    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;

    particle.animate(
        [
            { transform: `translate(${startX}%, ${startY}%)` },
            { transform: `translate(${endX}%, ${endY}%)` }
        ],
        {
            duration: Math.random() * 10000 + 5000, // Entre 5s y 15s
            iterations: Infinity, // Repetir infinitamente
            direction: 'alternate', // Ir y venir
            easing: 'ease-in-out' // Suavizar el movimiento
        }
    );
});