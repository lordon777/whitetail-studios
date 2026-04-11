/* ============================================
   WHITETAIL STUDIOS — Theme JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const headerNav = document.querySelector('.header__nav');
  if (navToggle && headerNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      headerNav.classList.toggle('open');
      document.body.style.overflow = headerNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav when clicking a link
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        headerNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- Lightbox ---
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox__nav--prev') : null;
  const lightboxNext = lightbox ? lightbox.querySelector('.lightbox__nav--next') : null;
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentLightboxIndex = 0;
  const galleryImages = [];

  if (lightbox && galleryItems.length > 0) {
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      if (img) {
        galleryImages.push(img.src);
        item.addEventListener('click', () => {
          currentLightboxIndex = index;
          lightboxImg.src = galleryImages[index];
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      }
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentLightboxIndex];
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentLightboxIndex];
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });
  }

  // --- Product Gallery Thumbnails ---
  const mainImage = document.querySelector('.product-gallery__main img');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');
  if (mainImage && thumbs.length > 0) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const img = thumb.querySelector('img');
        if (img) mainImage.src = img.src;
      });
    });
  }

  // --- Filter Buttons ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        productCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Quote Form Submission (mockup) ---
  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = quoteForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--muted-tan)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        quoteForm.reset();
      }, 2500);
    });
  }

  // --- Newsletter Form (mockup) ---
  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      setTimeout(() => {
        btn.textContent = originalText;
        newsletterForm.reset();
      }, 2500);
    });
  }

});
