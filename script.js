document.addEventListener('DOMContentLoaded', () => {
    // Animate header on load
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
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark mode toggle button
    const toggleDarkBtn = document.getElementById('toggle-dark');
    if (toggleDarkBtn) {
        toggleDarkBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelector('header')?.classList.toggle('dark-mode');
            document.querySelector('footer')?.classList.toggle('dark-mode');

            document.querySelectorAll('section').forEach(section => {
                section.classList.toggle('dark-mode');
            });
        });
    }
});
