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
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Update all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.toggle('dark-mode');
        });
    });
});
document.getElementById("toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

