// Simple Interactive Element (Placeholder for Gamification)

// Example: Click effect that spawns particles
document.addEventListener('click', function (e) {
    createClickParticle(e.clientX, e.clientY);
});

function createClickParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = '#ff00c8';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(particle);

    // Animate
    const animation = particle.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(2)', opacity: 0 }
    ], {
        duration: 500,
        easing: 'ease-out'
    });

    animation.onfinish = () => {
        particle.remove();
    };
}
