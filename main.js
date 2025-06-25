const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => 
{
  if (window.scrollY > 200) 
  {
    scrollBtn.classList.add("visible");
  } else 
  {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn?.addEventListener("click", () => 
{
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', function () 
{
  var opinieCarousel = document.querySelector('#opinieCarousel');
  if (opinieCarousel) {
    var carousel = new bootstrap.Carousel(opinieCarousel, 
      {
      interval: 4000,
      pause: false
      });
  }
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => 
{
  link.addEventListener('click', () => 
    {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) 
    {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

