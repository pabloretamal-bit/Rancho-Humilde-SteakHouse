const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  if (!prefersReduced) {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax || '0.1');
      const rect = el.getBoundingClientRect();
      if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
        const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      }
    });
  }
}, {passive:true});

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('menu-open', !open);
  });
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
}

// Inject a compact mobile overlay menu without extra markup.
const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `<a href="#carne">WAGYU</a><a href="#carta">CARTA</a><a href="#experiencia">EXPERIENCIA</a><a href="#shows">SHOWS</a><a href="#reserva">RESERVA</a>`;
document.body.appendChild(mobileMenu);

document.head.insertAdjacentHTML('beforeend', `<style>
.mobile-menu{position:fixed;inset:68px 0 auto 0;z-index:45;background:rgba(9,9,8,.98);backdrop-filter:blur(18px);padding:24px 18px;display:grid;gap:2px;transform:translateY(-120%);transition:.45s cubic-bezier(.22,1,.36,1);border-bottom:1px solid rgba(238,233,223,.15)}
.mobile-menu a{color:#eee9df;text-decoration:none;padding:16px 0;border-bottom:1px solid rgba(238,233,223,.12);font:500 12px 'DM Mono',monospace;letter-spacing:.15em}.menu-open .mobile-menu{transform:none}
</style>`);

// Reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
}, {threshold:.12});
document.querySelectorAll('.reveal, .display, .menu-item, .show-item, .wagyu-frame').forEach(el => observer.observe(el));

// Custom cursor
if (window.matchMedia('(min-width: 900px)').matches && !prefersReduced) {
  let mx = 0, my = 0, dx = 0, dy = 0;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursorDot.style.left = mx+'px'; cursorDot.style.top = my+'px'; });
  const animateCursor = () => { dx += (mx-dx)*.12; dy += (my-dy)*.12; cursorRing.style.left = dx+'px'; cursorRing.style.top = dy+'px'; requestAnimationFrame(animateCursor); };
  animateCursor();
  document.querySelectorAll('a,button,.menu-item,.show-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });
}

// Wagyu micro-tilt
const tilt = document.querySelector('[data-tilt]');
if (tilt && !prefersReduced && window.matchMedia('(min-width: 900px)').matches) {
  tilt.addEventListener('mousemove', e => {
    const r = tilt.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
    tilt.style.transform = `scale(1.015) rotateX(${y*-1.2}deg) rotateY(${x*1.4}deg)`;
  });
  tilt.addEventListener('mouseleave', () => tilt.style.transform = 'scale(1) rotateX(0) rotateY(0)');
}

// Magnetic buttons
if (!prefersReduced && window.matchMedia('(min-width: 900px)').matches) {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => { const r=el.getBoundingClientRect(); const x=(e.clientX-r.left-r.width/2)*.11; const y=(e.clientY-r.top-r.height/2)*.11; el.style.transform=`translate(${x}px,${y}px)`; });
    el.addEventListener('mouseleave', () => el.style.transform='');
  });
}

// Embers
const embers = document.getElementById('embers');
if (embers && !prefersReduced) {
  for (let i=0;i<26;i++) { const s=document.createElement('span'); s.className='ember'; s.style.left=(Math.random()*100)+'%'; s.style.bottom=(Math.random()*12)+'%'; s.style.animationDelay=(Math.random()*5)+'s'; s.style.animationDuration=(4+Math.random()*5)+'s'; s.style.width=s.style.height=(1+Math.random()*3)+'px'; embers.appendChild(s); }
}

// Demo booking form
const form = document.getElementById('bookingForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  note.textContent = 'SOLICITUD RECIBIDA · DEMO CONCEPTUAL';
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
