   const mainNav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      mainNav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

    const container = document.getElementById('particles');
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 3;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 12 + 10}s;
        animation-delay:${Math.random() * -20}s;
        background:rgba(${Math.random() > 0.5 ? '4,102,200' : '56,163,245'},${Math.random() * 0.5 + 0.3});
      `;
      container.appendChild(p);
    }

    const revealEls = document.querySelectorAll('.r-left, .r-right, .r-up');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));

    const heroH1 = document.querySelector('.hero-headline');
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      if (sy < window.innerHeight && heroH1) {
        heroH1.style.transform = `translateY(${sy * 0.18}px)`;
        heroH1.style.opacity   = 1 - sy / (window.innerHeight * 0.65);
      }
    }, { passive: true });