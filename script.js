document.addEventListener('DOMContentLoaded', () => {
  // Animate header
  document.getElementById('main-header').classList.add('animate');

  // Intersection Observer for sections
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
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

  // Dark Mode Toggle
  const toggleButton = document.getElementById('toggle-dark');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
