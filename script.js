document.addEventListener('DOMContentLoaded', () => {
  // Animate header fade-in (if needed)
  document.getElementById('main-header').classList.add('animate');

  // Intersection Observer for sections fade-in
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

  // Typing animation for welcome text
  const welcomeText = "Welcome to My Portfolio";
  const welcomeElement = document.getElementById('welcome-text');
  let index = 0;

  function type() {
    if (index < welcomeText.length) {
      welcomeElement.textContent += welcomeText.charAt(index);
      index++;
      setTimeout(type, 120); // typing speed in ms
    }
  }

  // Start typing effect
  type();
});
