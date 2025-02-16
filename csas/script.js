// Detectar scroll y mostrar el corazón
const heartSection = document.querySelector('.heart-section');

function checkScroll() {
    const sectionTop = heartSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si la sección del corazón está en la vista
    if (sectionTop < windowHeight * 0.75) {
        heartSection.style.opacity = '1'; // Mostrar el corazón
        startLights(); // Iniciar las partículas de luz
        window.removeEventListener('scroll', checkScroll); // Dejar de escuchar el scroll
    }
}

// Iniciar partículas de luz
function startLights() {
    const lightsContainer = document.querySelector('.lights');

    function createLight() {
        const light = document.createElement('div');
        light.classList.add('light-particle');
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animationDuration = `${Math.random() * 2 + 1}s`;
        lightsContainer.appendChild(light);

        // Eliminar la partícula después de que termine la animación
        setTimeout(() => {
            light.remove();
        }, 3000);
    }

    // Generar partículas cada 300ms
    setInterval(createLight, 300);
}

// Escuchar el evento de scroll
window.addEventListener('scroll', checkScroll);