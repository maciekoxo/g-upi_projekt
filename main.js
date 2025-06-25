const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function () {
  const opinieCarousel = document.querySelector('#opinieCarousel');
  if (opinieCarousel) {
    new bootstrap.Carousel(opinieCarousel, {
      interval: 3000,
      pause: false
    });
  }
});

document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (!targetSection) return;

    const navbar = document.querySelector('nav.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
