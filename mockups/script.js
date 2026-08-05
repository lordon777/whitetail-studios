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

  // --- Gallery Filter + Lightbox ---
  const lightbox = document.querySelector('.lightbox');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Category filtering (gallery page)
  if (filterBtns.length > 0 && galleryItems.some(i => i.dataset.category)) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (!filter) return;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        galleryItems.forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          if (show) {
            item.style.display = '';
            item.style.opacity = '0';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.5s var(--ease-out)';
              item.style.opacity = '1';
            });
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Filter-aware lightbox
  if (lightbox && galleryItems.length > 0) {
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox__close');
    const lightboxPrev = lightbox.querySelector('.lightbox__nav--prev');
    const lightboxNext = lightbox.querySelector('.lightbox__nav--next');
    let visible = [];
    let currentIndex = 0;

    const showAt = (i) => {
      if (!visible.length) return;
      currentIndex = (i + visible.length) % visible.length;
      const img = visible[currentIndex].querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Gallery image';
      }
    };

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        visible = galleryItems.filter(it => it.style.display !== 'none');
        currentIndex = visible.indexOf(item);
        if (currentIndex === -1) return;
        showAt(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showAt(currentIndex - 1); });
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showAt(currentIndex + 1); });

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
