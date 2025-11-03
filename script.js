// iniciar AOS
AOS.init({
  duration: 900,
  once: true
});

// año footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// navbar scrolled
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// cerrar menú en móvil al dar clic
const menu = document.getElementById('menu');
document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);
      bsCollapse.hide();
    }
  });
});

// FORM WHATSAPP
const waForm = document.getElementById('waForm');
if (waForm) {
  waForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const tel = document.getElementById('telefono').value.trim();
    const servicio = document.getElementById('servicio').value;
    const msg = document.getElementById('mensaje').value.trim();

    const texto = `Hola Dra. Rebeca, soy ${nombre}. Mi teléfono es ${tel}. Me interesa: ${servicio}.${msg ? ' Detalle: ' + msg : ''}`;
    const url = `https://wa.me/524423382727?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    waForm.reset();
  });
}
