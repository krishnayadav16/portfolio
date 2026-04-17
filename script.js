document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation

window.addEventListener('scroll', () => {
  document.querySelectorAll('.card, .project').forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
