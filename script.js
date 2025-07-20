const navbar = document.getElementById('navbar');
  const logo = document.querySelector('.logo');
  const homeLink = document.querySelector('a[href="#hero"]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      logo.textContent = 'Explore More';
    } else {
      navbar.classList.remove('scrolled');
      logo.textContent = 'Health & Wellness';
    }
  });

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    logo.textContent = 'Health & Wellness';
  });
