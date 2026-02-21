/* =============================================
   VENI EAT – APP.JS
   Restaurant Veni Eat, Abidjan
============================================= */

/* ====================
   DATA
==================== */
const menuData = [
  {
    id: 1,
    category: 'entrees',
    name: 'Salade Veni Eat',
    description: 'Salade fraîche de saison, tomates cerises, avocat, vinaigrette maison à l\'orange.',
    price: '3 500 FCFA',
    icon: '🥗',
  },
  {
    id: 2,
    category: 'entrees',
    name: 'Soupe de poisson fumé',
    description: 'Bouillon traditionnel au poisson fumé, légumes du jardin et herbes aromatiques.',
    price: '4 000 FCFA',
    icon: '🍲',
  },
  {
    id: 3,
    category: 'entrees',
    name: 'Accras de crevettes',
    description: 'Beignets croustillants de crevettes marinées, sauce pimentée maison.',
    price: '4 500 FCFA',
    icon: '🍤',
  },
  {
    id: 4,
    category: 'plats',
    name: 'Poulet braisé Veni',
    description: 'Poulet fermier braisé au feu de bois, épices secrètes, servi avec attiéké et banane plantain.',
    price: '7 500 FCFA',
    icon: '🍗',
  },
  {
    id: 5,
    category: 'plats',
    name: 'Thiéboudienne Royal',
    description: 'Riz au poisson ivoirien, légumes mijotés, sauce tomate épicée. Plat signature.',
    price: '8 000 FCFA',
    icon: '🍛',
  },
  {
    id: 6,
    category: 'plats',
    name: 'Côte de bœuf grillée',
    description: 'Côte de bœuf saignante, marinade africaine, frites maison et légumes sautés.',
    price: '12 000 FCFA',
    icon: '🥩',
  },
  {
    id: 7,
    category: 'plats',
    name: 'Crevettes géantes sautées',
    description: 'Crevettes royales du Golfe, beurre à l\'ail, citron vert, riz jasmin.',
    price: '10 500 FCFA',
    icon: '🦐',
  },
  {
    id: 8,
    category: 'desserts',
    name: 'Fondant chocolat',
    description: 'Cœur coulant au chocolat noir 70%, glace vanille artisanale.',
    price: '2 500 FCFA',
    icon: '🍫',
  },
  {
    id: 9,
    category: 'desserts',
    name: 'Tarte aux mangues',
    description: 'Tarte sablée aux mangues fraîches d\'Abidjan, crème pâtissière légère.',
    price: '2 800 FCFA',
    icon: '🥭',
  },
  {
    id: 10,
    category: 'desserts',
    name: 'Gâteau coco-ananas',
    description: 'Moelleux à la noix de coco, coulis d\'ananas frais, touche de rhum.',
    price: '2 500 FCFA',
    icon: '🍰',
  },
  {
    id: 11,
    category: 'boissons',
    name: 'Jus de bissap',
    description: 'Bissap rouge maison, sucre de canne, menthe fraîche.',
    price: '1 500 FCFA',
    icon: '🥤',
  },
  {
    id: 12,
    category: 'boissons',
    name: 'Cocktail tropical Veni',
    description: 'Mangue, ananas, gingembre frais, citron vert. Sans alcool ou avec rhum.',
    price: '2 500 FCFA',
    icon: '🍹',
  },
  {
    id: 13,
    category: 'boissons',
    name: 'Gingembre citron',
    description: 'Infusion gingembre frais, citron pressé, miel d\'acacia.',
    price: '1 800 FCFA',
    icon: '🫙',
  },
  {
    id: 14,
    category: 'boissons',
    name: 'Café ivoirien',
    description: 'Arabica de Côte d\'Ivoire, torréfaction artisanale, servi chaud ou glacé.',
    price: '1 200 FCFA',
    icon: '☕',
  },
];

const reviewsData = [
  {
    id: 1,
    name: 'Amadou Coulibaly',
    date: 'Novembre 2024',
    rating: 5,
    text: 'Expérience à refaire. La cuisine est simplement exceptionnelle, le service irréprochable et l\'ambiance chaleureuse. Aucune attente – on se sent vraiment accueilli.',
    badge: 'Cuisine 5/5 – Service 5/5 – Ambiance 5/5',
    initials: 'AC',
  },
  {
    id: 2,
    name: 'Fatou Diallo',
    date: 'Octobre 2024',
    rating: 5,
    text: 'Un endroit magnifique à Abidjan. Les plats sont préparés avec soin, les saveurs sont authentiques et généreuses. Je recommande vivement le poulet braisé !',
    badge: 'Note Google : 5/5',
    initials: 'FD',
  },
  {
    id: 3,
    name: 'Kofi Asante',
    date: 'Septembre 2024',
    rating: 5,
    text: 'Le meilleur restaurant que j\'ai testé à Abidjan. Accueil chaleureux dès l\'entrée, plats délicieux, et le dessert à la mangue était divin. Un vrai régal !',
    badge: 'Client fidèle',
    initials: 'KA',
  },
];

const galleryData = [
  { id: 1, icon: '🍽', label: 'Plats signature Veni Eat', caption: 'Notre sélection de plats signatures' },
  { id: 2, icon: '🍗', label: 'Poulet braisé traditionnel', caption: 'Poulet braisé au feu de bois' },
  { id: 3, icon: '🥗', label: 'Entrées fraîches', caption: 'Entrées de saison' },
  { id: 4, icon: '🌿', label: 'Jardin et terrasse', caption: 'Notre terrasse extérieure' },
  { id: 5, icon: '🍹', label: 'Cocktails maison', caption: 'Cocktails tropicaux' },
  { id: 6, icon: '🎂', label: 'Desserts artisanaux', caption: 'Nos desserts faits maison' },
  { id: 7, icon: '🫂', label: 'Convivialité', caption: 'Moments en famille' },
];

/* ====================
   DOM READY
==================== */
document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();
  initHeader();
  initDarkMode();
  initMobileMenu();
  initRevealAnimations();
  initMenu();
  initReviews();
  initGallery();
  initReservationForm();
  initNewsletter();
  initBackToTop();
  initStarCounter();
  initSmoothScroll();
});

/* ====================
   COOKIE BANNER
==================== */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('cookie-accept');
  if (!banner || !btn) return;

  if (localStorage.getItem('veni_cookies') === 'accepted') {
    banner.remove();
    return;
  }

  setTimeout(() => banner.classList.add('visible'), 800);

  btn.addEventListener('click', () => {
    localStorage.setItem('veni_cookies', 'accepted');
    banner.style.transform = 'translateX(-50%) translateY(120%)';
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 400);
  });
}

/* ====================
   HEADER SCROLL
==================== */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ====================
   DARK MODE
==================== */
function initDarkMode() {
  const btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;

  const sunIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  const savedTheme = localStorage.getItem('veni_theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    btn.innerHTML = sunIcon;
    btn.setAttribute('aria-label', 'Désactiver le mode sombre');
  }

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      btn.innerHTML = moonIcon;
      btn.setAttribute('aria-label', 'Activer le mode sombre');
      localStorage.setItem('veni_theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      btn.innerHTML = sunIcon;
      btn.setAttribute('aria-label', 'Désactiver le mode sombre');
      localStorage.setItem('veni_theme', 'dark');
    }
  });
}

/* ====================
   MOBILE MENU
==================== */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    if (isOpen) close();
    else {
      nav.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on nav link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', close);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ====================
   REVEAL ON SCROLL
==================== */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children with delay
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Add staggered delays to sibling reveals
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const revealEls = section.querySelectorAll('.reveal');
    revealEls.forEach((el, idx) => {
      el.dataset.delay = idx * 80;
    });
  });

  elements.forEach(el => observer.observe(el));
}

/* ====================
   MENU
==================== */
function initMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const renderMenu = (filter = 'all') => {
    const filtered = filter === 'all'
      ? menuData
      : menuData.filter(item => item.category === filter);

    grid.innerHTML = filtered.map(item => `
      <article class="menu-card" role="listitem" aria-label="${item.name}">
        <div class="menu-card-img">
          <span role="img" aria-label="${item.name}">${item.icon}</span>
          <span class="menu-card-cat">${getCatLabel(item.category)}</span>
        </div>
        <div class="menu-card-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-price">${item.price}</span>
            <a href="https://wa.me/2250705942265?text=Bonjour%2C%20je%20souhaite%20commander%20%22${encodeURIComponent(item.name)}%22" 
               target="_blank" rel="noopener noreferrer"
               class="menu-order-btn" 
               aria-label="Commander ${item.name} via WhatsApp">
              Commander
            </a>
          </div>
        </div>
      </article>
    `).join('');
  };

  renderMenu();

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });
}

function getCatLabel(cat) {
  const labels = { entrees: 'Entrée', plats: 'Plat principal', desserts: 'Dessert', boissons: 'Boisson' };
  return labels[cat] || cat;
}

/* ====================
   REVIEWS CAROUSEL
==================== */
function initReviews() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (!track || !dotsContainer || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  let autoplayInterval = null;

  // Render slides
  track.innerHTML = reviewsData.map((review, i) => `
    <div class="carousel-slide" 
         role="tabpanel" 
         id="slide-${i}" 
         aria-label="Avis ${i + 1} de ${reviewsData.length}"
         ${i !== 0 ? 'aria-hidden="true"' : ''}>
      <div class="slide-stars" aria-label="${review.rating} étoiles">${'★'.repeat(review.rating)}</div>
      <blockquote class="slide-text">"${review.text}"</blockquote>
      <div class="slide-author">
        <div class="slide-avatar" aria-hidden="true">${review.initials}</div>
        <div class="slide-author-info">
          <span class="slide-name">${review.name}</span>
          <span class="slide-date">${review.date}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Render dots
  dotsContainer.innerHTML = reviewsData.map((_, i) => `
    <button class="dot ${i === 0 ? 'active' : ''}" 
            role="tab" 
            id="dot-${i}"
            aria-selected="${i === 0 ? 'true' : 'false'}"
            aria-controls="slide-${i}"
            aria-label="Aller à l'avis ${i + 1}">
    </button>
  `).join('');

  const goto = (index) => {
    const slides = track.querySelectorAll('.carousel-slide');
    const dots = dotsContainer.querySelectorAll('.dot');

    slides[currentIndex].setAttribute('aria-hidden', 'true');
    dots[currentIndex].classList.remove('active');
    dots[currentIndex].setAttribute('aria-selected', 'false');

    currentIndex = (index + reviewsData.length) % reviewsData.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides[currentIndex].removeAttribute('aria-hidden');
    dots[currentIndex].classList.add('active');
    dots[currentIndex].setAttribute('aria-selected', 'true');
  };

  prevBtn.addEventListener('click', () => { goto(currentIndex - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', () => { goto(currentIndex + 1); resetAutoplay(); });

  dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
    dot.addEventListener('click', () => { goto(i); resetAutoplay(); });
  });

  // Keyboard navigation
  document.getElementById('carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { goto(currentIndex - 1); resetAutoplay(); }
    if (e.key === 'ArrowRight') { goto(currentIndex + 1); resetAutoplay(); }
  });

  // Autoplay
  const startAutoplay = () => {
    autoplayInterval = setInterval(() => goto(currentIndex + 1), 5000);
  };
  const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    startAutoplay();
  };
  startAutoplay();

  // Pause on hover
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  carousel.addEventListener('mouseleave', startAutoplay);
}

/* ====================
   GALLERY
==================== */
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightbox-content');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  if (!grid || !lightbox) return;

  let currentLbIndex = 0;

  // Render gallery items
  grid.innerHTML = galleryData.map((item, i) => `
    <div class="gallery-item" 
         tabindex="0" 
         role="button"
         data-index="${i}"
         aria-label="Voir l'image : ${item.label}"
         loading="lazy">
      <span role="img" aria-hidden="true">${item.icon}</span>
      <div class="gallery-overlay">
        <span class="gallery-zoom-icon" aria-hidden="true">🔍</span>
      </div>
    </div>
  `).join('');

  const openLightbox = (index) => {
    currentLbIndex = index;
    const item = galleryData[index];
    lbContent.innerHTML = `
      <div style="font-size:6rem">${item.icon}</div>
      <p style="color:rgba(255,255,255,0.7);margin-top:1rem;font-family:var(--font-display)">${item.caption}</p>
    `;
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const closeLightbox = () => {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    // Return focus to opened item
    const items = grid.querySelectorAll('.gallery-item');
    if (items[currentLbIndex]) items[currentLbIndex].focus();
  };

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) openLightbox(parseInt(item.dataset.index));
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.gallery-item');
      if (item) { e.preventDefault(); openLightbox(parseInt(item.dataset.index)); }
    }
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  lbPrev.addEventListener('click', () => {
    openLightbox((currentLbIndex - 1 + galleryData.length) % galleryData.length);
  });
  lbNext.addEventListener('click', () => {
    openLightbox((currentLbIndex + 1) % galleryData.length);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.hidden) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightbox((currentLbIndex - 1 + galleryData.length) % galleryData.length);
      if (e.key === 'ArrowRight') openLightbox((currentLbIndex + 1) % galleryData.length);
    }
  });
}

/* ====================
   RESERVATION FORM
==================== */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  const validators = {
    name: (val) => val.trim().length >= 2 ? '' : 'Veuillez entrer votre nom complet.',
    phone: (val) => /^[\d\s+()./-]{8,20}$/.test(val.trim()) ? '' : 'Numéro de téléphone invalide.',
    persons: (val) => val ? '' : 'Veuillez sélectionner le nombre de personnes.',
    date: (val) => {
      if (!val) return 'Veuillez choisir une date.';
      if (new Date(val) < new Date(new Date().toDateString())) return 'La date doit être aujourd\'hui ou dans le futur.';
      return '';
    },
  };

  const showError = (fieldId, msg) => {
    const field = document.getElementById(`res-${fieldId}`);
    const error = document.getElementById(`${fieldId}-error`);
    if (field) field.classList.toggle('error', !!msg);
    if (error) error.textContent = msg;
  };

  const validateField = (fieldId, value) => {
    const validator = validators[fieldId];
    const msg = validator ? validator(value) : '';
    showError(fieldId, msg);
    return !msg;
  };

  // Live validation
  ['name', 'phone', 'persons', 'date'].forEach(id => {
    const el = document.getElementById(`res-${id}`);
    if (el) {
      el.addEventListener('blur', () => validateField(id, el.value));
      el.addEventListener('input', () => {
        if (el.classList.contains('error')) validateField(id, el.value);
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const fields = ['name', 'phone', 'persons', 'date'];

    fields.forEach(id => {
      const el = document.getElementById(`res-${id}`);
      if (el && !validateField(id, el.value)) isValid = false;
    });

    if (!isValid) return;

    // Simulate submission
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    setTimeout(() => {
      form.style.opacity = '0';
      form.style.transform = 'scale(0.95)';
      setTimeout(() => {
        form.style.display = 'none';
        successMsg.removeAttribute('hidden');
      }, 300);
    }, 1200);
  });
}

/* ====================
   NEWSLETTER
==================== */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');
  if (!form || !msg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = 'Adresse email invalide.';
      msg.style.color = '#e63946';
      return;
    }
    msg.textContent = '✓ Inscription réussie ! Merci.';
    msg.style.color = 'var(--clr-accent)';
    form.reset();
    setTimeout(() => msg.textContent = '', 4000);
  });
}

/* ====================
   BACK TO TOP
==================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) btn.removeAttribute('hidden');
    else btn.setAttribute('hidden', '');
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ====================
   STAR COUNTER ANIMATION
==================== */
function initStarCounter() {
  const counter = document.getElementById('star-counter');
  if (!counter) return;

  const target = parseFloat(counter.dataset.target);
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        animateCounter(counter, 0, target, 1200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
    const value = (start + (end - start) * eased).toFixed(1);

    el.textContent = value;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = end.toFixed(1);
  };

  requestAnimationFrame(update);
}

/* ====================
   SMOOTH SCROLL
==================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.getElementById('header')?.offsetHeight || 72;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Update focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}
