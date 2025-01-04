document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const elements = document.querySelectorAll('header, main, footer, .gallery img');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        const deltaX = x - elementX;
        const deltaY = y - elementY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 300; // Zasięg rozświetlania
        const opacity = 1 - Math.min(distance / maxDistance, 1);

        element.style.opacity = Math.max(0.1, opacity); // minimalna opacity 0.1

    });
});