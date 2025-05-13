// Animate header and sections on load
document.addEventListener('DOMContentLoaded', () => {
    // Header animation
    document.getElementById('main-header').classList.add('animate');

    // Section fade-in on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Dark mode toggle
    const toggleButton = document.getElementById('toggle-dark');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
