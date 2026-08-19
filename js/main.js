/**
 * Narayan Prasad Mishra — Main Interactivity Module
 * Handles navigation, gallery filtering, lightboxes, counters, toasts, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNavLinks();
  initStatsCounter();
  initGalleryFilters();
  initGalleryModal();
  initBackToTop();
  initContactForm();
  initCopyButtons();
  initFooterYear();
});

/**
 * 1. Navbar Scroll Effect
 */
function initNavbar() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Highlight Active Nav Link based on URL
 */
function initActiveNavLinks() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.site-navbar .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop();
    if (
      linkPage === page || 
      (page === '' && linkPage === 'index.html') ||
      (page === '/' && linkPage === 'index.html')
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile navbar on nav item click
  const navItems = document.querySelectorAll('.navbar-collapse .nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/**
 * 3. Animated Number Counter for Stats Section
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length === 0) return;

  let hasRun = false;

  const runCounters = () => {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target') || 0;
      const suffix = counter.getAttribute('data-suffix') || '+';
      const duration = 1800; // ms
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const stepIncrement = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepIncrement;
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        runCounters();
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/**
 * 4. Portfolio / Gallery Filtering
 */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-nav .filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length === 0 || items.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden-item');
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.classList.add('hidden-item');
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * 5. Gallery Modal / Lightbox Details
 */
const PROJECT_DATABASE = {
  'work-01': {
    title: { en: 'Lumina Brand Identity & Guidelines', ne: 'लुमिना ब्रान्ड पहिचान तथा गाइडलाइन' },
    category: { en: 'Brand Identity', ne: 'ब्रान्डिङ' },
    client: 'Lumina Tech Studio, Butwal',
    year: '2026',
    tools: 'Adobe Illustrator, InDesign, Photoshop',
    image: 'images/gallery/work-01.jpg',
    description: {
      en: 'A comprehensive brand identity project including visual logo system, color palette theory, typography scale, corporate business stationary, and brand asset guidelines for a modern tech startup.',
      ne: 'आधुनिक टेक स्टार्टअपका लागि लोगो डिजाइन, रङ संयोजन सिद्धान्त, कर्पोरेट भिजिटिङ कार्ड तथा पूर्ण ब्रान्ड गाइडलाइन निर्माण गरिएको परियोजना।'
    }
  },
  'work-02': {
    title: { en: 'Apex Organic Agro Logo System', ne: 'एपेक्स अर्गानिक एग्रो लोगो प्रणाली' },
    category: { en: 'Logo Design', ne: 'लोगो डिजाइन' },
    client: 'Apex Agro Innovations, Rupandehi',
    year: '2025',
    tools: 'Adobe Illustrator, CorelDraw',
    image: 'images/gallery/work-02.jpg',
    description: {
      en: 'Minimalist logo mark combining organic leaf motifs and geometric sunrise geometry, designed for high-scalability on packaging, embroidery, digital icons, and large-format outdoor billboards.',
      ne: 'प्राकृतिक पात र सूर्योदयको ज्यामितीय संयोजनबाट बनेको मिनिमल लोगो मार्क, जुन प्याकेजिङ तथा होर्डिङ बोर्डहरूमा उत्कृष्ट देखिन्छ।'
    }
  },
  'work-03': {
    title: { en: 'Social Media Campaign Banners', ne: 'सामाजिक सञ्जाल क्याम्पेन ब्यानर' },
    category: { en: 'Social Media', ne: 'सामाजिक सञ्जाल' },
    client: 'Himalayan Coffee Lounge',
    year: '2026',
    tools: 'Adobe Photoshop, Illustrator, Figma',
    image: 'images/gallery/work-03.jpg',
    description: {
      en: 'A vibrant suite of 10+ social media promotional banner templates designed for Instagram stories, Facebook carousel ads, and promotional discount campaigns with high visual conversion rates.',
      ne: 'इन्स्टाग्राम र फेसबुक विज्ञापनका लागि आकर्षक रङ संयोजनसहित तयार पारिएका १० भन्दा बढी प्रवर्द्धनात्मक ब्यानरहरू।'
    }
  },
  'work-04': {
    title: { en: 'Tri-Fold Corporate Brochure & Flyer', ne: 'कर्पोरेट थ्री-फोल्ड ब्रोसर तथा फ्लायर' },
    category: { en: 'Print Design', ne: 'प्रिन्ट डिजाइन' },
    client: 'Grand Hospitality Group',
    year: '2025',
    tools: 'Adobe InDesign, Photoshop (CMYK 300DPI)',
    image: 'images/gallery/work-04.jpg',
    description: {
      en: 'Prepress-ready tri-fold corporate brochure featuring precision typography grid, CMYK color profiles, bleed margins, and custom spot UV finish layout planning.',
      ne: '३०० DPI CMYK गुणस्तर, ब्लीड मार्जिन र स्पट UV फिनिसिङसहित अफसेट प्रिन्टका लागि तयार गरिएको ३-फोल्ड ब्रोसर।'
    }
  },
  'work-05': {
    title: { en: 'Creative Visual Composition & Art', ne: 'सिर्जनात्मक दृश्य कम्पोजिसन तथा आर्ट' },
    category: { en: 'Creative Design', ne: 'सिर्जनात्मक डिजाइन' },
    client: 'Nepal Creative Arts Festival',
    year: '2026',
    tools: 'Adobe Photoshop, Digital Painting Tools',
    image: 'images/gallery/work-05.jpg',
    description: {
      en: 'Surrealistic visual poster blending Nepalese cultural heritage elements with futuristic digital typography and dynamic atmospheric lighting effects.',
      ne: 'नेपाली सांस्कृतिक सम्पदा र आधुनिक डिजिटल फन्टको कलात्मक सम्मिश्रणबाट तयार पारिएको सिर्जनात्मक पोस्टर आर्ट।'
    }
  },
  'work-06': {
    title: { en: 'Eco-Friendly Product Packaging Box', ne: 'इको-फ्रेन्डली उत्पादन प्याकेजिङ बक्स' },
    category: { en: 'Print Design', ne: 'प्रिन्ट डिजाइन' },
    client: 'Pure Organic Tea Estates',
    year: '2025',
    tools: 'Adobe Illustrator, InDesign, 3D Mockup Studio',
    image: 'images/gallery/work-06.jpg',
    description: {
      en: 'Complete structural dieline packaging design with embossed brand logo, product information hierarchy, barcode alignment, and matte finish aesthetics.',
      ne: 'डाइलाइन कटिङ, इम्बोसिङ लोगो तथा आकर्षक म्याट फिनिसिङसहित अर्गानिक चिया प्याकेजिङ बक्सको डिजाइन।'
    }
  },
  'work-07': {
    title: { en: 'Editorial Typography & Event Poster', ne: 'एडिटोरियल टाइपोग्राफी तथा कार्यक्रम पोस्टर' },
    category: { en: 'Creative Design', ne: 'सिर्जनात्मक डिजाइन' },
    client: 'Lumbini Youth Design Summit',
    year: '2026',
    tools: 'Adobe Illustrator, InDesign',
    image: 'images/gallery/work-07.jpg',
    description: {
      en: 'High-contrast editorial typographic design utilizing Swiss grid systems, custom glyph modifications, and expressive bilingual typography in English and Devanagari.',
      ne: 'स्विस ग्रिड प्रणाली र देवनागरी तथा अंग्रेजी दुवै भाषामा आकर्षक टाइपोग्राफीसहित डिजाइन गरिएको इभेन्ट पोस्टर।'
    }
  },
  'work-08': {
    title: { en: 'Digital Marketing & Banner Kit', ne: 'डिजिटल मार्केटिङ तथा ब्यानर किट' },
    category: { en: 'Social Media', ne: 'सामाजिक सञ्जाल' },
    client: 'Zenith E-Commerce Nepal',
    year: '2026',
    tools: 'Adobe Photoshop, Figma',
    image: 'images/gallery/work-08.jpg',
    description: {
      en: 'A high-impact omni-channel digital marketing banner pack tailored for festive discounts, e-commerce landing graphics, and app store feature banners.',
      ne: 'ई-कमर्स सेल, चाडपर्व अफर तथा अनलाइन विज्ञापनका लागि तयार गरिएको पूर्ण डिजिटल ब्यानर किट।'
    }
  }
};

function initGalleryModal() {
  const modalEl = document.getElementById('projectModal');
  if (!modalEl) return;

  const cards = document.querySelectorAll('[data-project-id]');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const data = PROJECT_DATABASE[projId];
      if (!data) return;

      const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';

      const title = (data.title[lang] || data.title.en);
      const desc = (data.description[lang] || data.description.en);
      const category = (data.category[lang] || data.category.en);

      document.getElementById('modalProjectTitle').textContent = title;
      document.getElementById('modalProjectDesc').textContent = desc;
      document.getElementById('modalProjectCategory').textContent = category;
      document.getElementById('modalProjectClient').textContent = data.client;
      document.getElementById('modalProjectYear').textContent = data.year;
      document.getElementById('modalProjectTools').textContent = data.tools;

      const modalImg = document.getElementById('modalProjectImg');
      if (modalImg) {
        modalImg.src = data.image;
        modalImg.alt = title;
      }

      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    });
  });
}

/**
 * 6. Back-to-Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 7. Contact Form Submission (Mailto + Feedback Toast)
 */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const subject = document.getElementById('contactSubject')?.value.trim() || 'Design Inquiry';
    const service = document.getElementById('contactService')?.value || 'Graphic Design';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'warning');
      return;
    }

    const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ARequired Service: ${service}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:menpmishra@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${mailtoBody}`;

    showToast('Opening your email client to send message...', 'success');

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    form.reset();
  });
}

/**
 * 8. Quick Copy to Clipboard (Phone & Email)
 */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-text');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`"${textToCopy}" copied to clipboard!`, 'success');
        }).catch(() => {
          showToast(`Copied: ${textToCopy}`, 'info');
        });
      }
    });
  });
}

/**
 * 9. Toast Notification Helper
 */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container-custom');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container-custom';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-custom';
  
  let icon = 'bi-info-circle-fill text-info';
  if (type === 'success') icon = 'bi-check-circle-fill text-success';
  if (type === 'warning') icon = 'bi-exclamation-triangle-fill text-warning';

  toast.innerHTML = `
    <i class="bi ${icon} fs-5"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/**
 * 10. Update Current Year Dynamically in Footer
 */
function initFooterYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const yr = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = yr;
  });
}
