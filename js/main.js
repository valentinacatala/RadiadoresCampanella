/* ============================================================
   RADIADORES CAMPANELLA – main.js
   ============================================================ */

/* ── WHATSAPP POPUP ──────────────────────────────────────── */
function toggleWA() {
  document.getElementById('waPopup').classList.toggle('open');
}

// Se abre automáticamente después de 4 segundos
setTimeout(() => {
  document.getElementById('waPopup').classList.add('open');
}, 4000);

// Se cierra al hacer clic fuera del bubble
document.addEventListener('click', function (e) {
  const bubble = document.querySelector('.wa-bubble');
  if (bubble && !bubble.contains(e.target)) {
    document.getElementById('waPopup').classList.remove('open');
  }
});

/* ── MOBILE MENU TOGGLE ──────────────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
  });
});

/* ── SCROLL ANIMATIONS (fade-in) ────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => observer.observe(el));

/* ── NAVBAR SCROLL EFFECT ───────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,10,10,0.98)';
  } else {
    nav.style.background = 'rgba(10,10,10,0.92)';
  }
});
