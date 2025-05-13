// Animate header on load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main-header').classList.add('animate');
    
    // Animate sections when they enter the viewport
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Toggle Dark Mode
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').class
