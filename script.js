// Animate header on load
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    if (header) {
        header.classList.add('animate');
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Toggle dark mode
    const toggleBtn = document.getElementById('toggle-dark');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Optional: Typing animation logic (placeholder)
    const typingTarget = document.getElementById('typing-animation');
    if (typingTarget) {
        // You can optionally animate text here using a library or custom function.
    }
});
