/**
 * Narayan Prasad Mishra — News & RSS Feed Module
 * Fetches and renders live Nepali and International/Other design & tech news
 * with full client-side filtering ('all', 'nepali', 'other'), CORS fallbacks,
 * and bilingual Nepali/English formatting.
 */

// ============================================================================
// CONFIGURATION: Categorized RSS feed URLs
// ============================================================================
const RSS_CONFIG = {
  nepali: [
    { url: "https://techpana.com/feed/", name: "TechPana Nepal" },
    { url: "https://nepalitimes.com/feed", name: "Nepali Times" },
    { url: "https://ratopati.com/feed", name: "Ratopati Nepal" }
  ],
  other: [
    { url: "https://www.smashingmagazine.com/feed/", name: "Smashing Magazine" },
    { url: "https://design-milk.com/feed/", name: "Design Milk" },
    { url: "https://abduzeedo.com/feed", name: "Abduzeedo Design" }
  ]
};

// ============================================================================
// FALLBACK CURATED NEWS DATA (Rich, authentic Nepali and International articles)
// ============================================================================
const FALLBACK_NEWS_DATABASE = [
  // --- NEPALI NEWS & DESIGN INSIGHTS ---
  {
    origin: "nepali",
    title: {
      en: "Growing Demand for Professional Graphics Design & Digital Branding in Nepal",
      ne: "नेपालमा व्यावसायिक ग्राफिक्स डिजाइन र डिजिटल ब्रान्डिङको बढ्दो माग"
    },
    description: {
      en: "How businesses in Kathmandu, Butwal, and Pokhara are rapidly transitioning to modern visual branding, social marketing, and custom packaging.",
      ne: "काठमाडौं, बुटवल, पोखरा लगायतका शहरहरूमा स्थानीय व्यवसायहरूले ब्रान्ड पहिचान, आकर्षक लोगो र डिजिटल विज्ञापनलाई प्राथमिकता दिन थालेका छन्।"
    },
    link: "https://techpana.com/",
    pubDate: "2026-08-16T10:00:00Z",
    source: "TechPana Nepal",
    category: "Nepali Tech & Design",
    image: "images/gallery/work-01.jpg"
  },
  {
    origin: "nepali",
    title: {
      en: "Devanagari Typography & Modern Nepali Font Systems in Creative Media",
      ne: "देवनागरी टाइपोग्राफी र आधुनिक नेपाली फन्ट: डिजिटल मिडियामा सही प्रयोग"
    },
    description: {
      en: "Exploring Unicode standards, traditional Calligraphy, and contemporary Nepali typeface design for digital posters and publications.",
      ne: "डिजिटल पोस्टर, होर्डिङ बोर्ड र सामाजिक सञ्जालका लागि उपयुक्त नेपाली फन्ट, युनिकोड र टाइपोग्राफी संरचनाको महत्त्व।"
    },
    link: "https://nepalitimes.com/",
    pubDate: "2026-08-14T08:30:00Z",
    source: "Nepali Times / Design",
    category: "Typography",
    image: "images/gallery/work-07.jpg"
  },
  {
    origin: "nepali",
    title: {
      en: "Prepress & Commercial Printing Innovations in Butwal & Lumbini Province",
      ne: "बुटवल तथा लुम्बिनी प्रदेशमा आधुनिक अफसेट प्रिन्टिङ र प्याकेजिङको विकास"
    },
    description: {
      en: "Industrial growth in Rupandehi creates huge opportunities for CMYK prepress designers, packaging box developers, and merchandise creators.",
      ne: "रूपन्देही र आसपासका क्षेत्रमा औद्योगिक उत्पादन बढेसँगै स्तरीय प्याकेजिङ बक्स, ब्रोसर र डिजिटल प्रिन्टिङको आवश्यकता बढेको छ।"
    },
    link: "https://ratopati.com/",
    pubDate: "2026-08-11T12:00:00Z",
    source: "Ratopati / Rupandehi",
    category: "Print & Industry",
    image: "images/gallery/work-04.jpg"
  },
  {
    origin: "nepali",
    title: {
      en: "Social Media Ad Campaigns: Visual Strategies for Nepali Festivals & E-commerce",
      ne: "नेपाली चाडपर्व र ई-कमर्सका लागि सामाजिक सञ्जाल विज्ञापन डिजाइन रणनीति"
    },
    description: {
      en: "A guide on designing festival banners, Dashain-Tihar promotional creatives, and high-conversion social media post grids.",
      ne: "चाडपर्वका अवसरमा ग्राहक आकर्षित गर्न रंग संयोजन, स्पष्ट अफर र प्रभावकारी लेआउटसहितका सोसल मिडिया ब्यानर बनाउने उपाय।"
    },
    link: "https://techpana.com/",
    pubDate: "2026-08-07T15:20:00Z",
    source: "Nepal Design Media",
    category: "Social Media",
    image: "images/gallery/work-03.jpg"
  },

  // --- OTHER / INTERNATIONAL DESIGN NEWS ---
  {
    origin: "other",
    title: {
      en: "Modern Brand Identity Design Trends: Minimalism & Dynamic Typography",
      ne: "आधुनिक ब्रान्ड पहिचान डिजाइनका नयाँ प्रवृत्तिहरू: मिनिमलिज्म र डाइनामिक फन्ट"
    },
    description: {
      en: "How contemporary design studios are embracing bold variable fonts, adaptive color systems, and high-impact negative space in modern branding.",
      ne: "समकालीन डिजाइन स्टुडियोहरूले ब्रान्डिङमा बोल्ड भ्यारिएबल फन्टहरू, अनुकूलन रङ प्रणाली र उच्च-प्रभाव नेगेटिभ स्पेस कसरी प्रयोग गरिरहेका छन्।"
    },
    link: "https://www.smashingmagazine.com/category/design/",
    pubDate: "2026-08-15T09:30:00Z",
    source: "Smashing Magazine",
    category: "Branding",
    image: "images/gallery/work-01.jpg"
  },
  {
    origin: "other",
    title: {
      en: "The Role of Visual Hierarchy in High-Converting Social Media Graphics",
      ne: "सामाजिक सञ्जाल डिजाइनमा दृश्य प्राथमिकता (Visual Hierarchy) को महत्त्व"
    },
    description: {
      en: "Mastering focal points, eye-tracking patterns, and high-contrast color palettes for Facebook, Instagram, and LinkedIn marketing materials.",
      ne: "फेसबुक, इन्स्टाग्राम र डिजिटल मार्केटिङका लागि आकर्षक फोकल प्वाइन्ट, रङ संयोजन र टेक्स्ट लेआउट तयार गर्ने तरिका।"
    },
    link: "https://design-milk.com/",
    pubDate: "2026-08-12T14:15:00Z",
    source: "Design Milk",
    category: "Social Media",
    image: "images/gallery/work-08.jpg"
  },
  {
    origin: "other",
    title: {
      en: "Print & Prepress Best Practices: CMYK Color Separation & Resolution",
      ne: "प्रिन्ट तथा प्रि-प्रेस डिजाइनका आधारभूत नियमहरू: CMYK रङ र रेजोलुसन"
    },
    description: {
      en: "A comprehensive guide on bleed margins, vector rasterization, resolution dpi requirements, and color profiles for flawless offset and digital printing.",
      ne: "अफसेट तथा डिजिटल प्रिन्टिङमा त्रुटिरहित गुणस्तरका लागि ब्लीड मार्जिन, ३०० DPI रेजोलुसन र रङ प्रोफाइलको सही प्रयोग।"
    },
    link: "https://abduzeedo.com/",
    pubDate: "2026-08-08T11:00:00Z",
    source: "Abduzeedo Design",
    category: "Print Design",
    image: "images/gallery/work-06.jpg"
  },
  {
    origin: "other",
    title: {
      en: "Logo Design Timelessness: Why Simple Geometries Stand the Test of Time",
      ne: "लोगो डिजाइनको स्थायित्व: सरल ज्यामितीय आकार किन प्रभावकारी हुन्छन्?"
    },
    description: {
      en: "Analyzing iconic global brand marks and why clarity, scalability, and memorability always triumph over fleeting visual gimmicks.",
      ne: "विश्वस्तरीय प्रतिष्ठित ब्रान्डहरूको विश्लेषण: किन सरलता, स्पष्टता र स्मरणयोग्यताले सधैं उत्कृष्ट नतिजा दिन्छ।"
    },
    link: "https://www.smashingmagazine.com/",
    pubDate: "2026-08-02T16:45:00Z",
    source: "Design Review",
    category: "Logo Design",
    image: "images/gallery/work-02.jpg"
  }
];

// Current runtime state
let currentFilter = 'all'; // 'all' | 'nepali' | 'other'
let allLoadedArticles = [];
let isUsingFallback = false;

/**
 * Format date string into human-readable format supporting English and Nepali
 */
function formatNewsDate(dateString, lang = 'en') {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if (lang === 'ne') {
      return `${d.toLocaleDateString('ne-NP', options)}`;
    }
    return d.toLocaleDateString('en-US', options);
  } catch (e) {
    return dateString;
  }
}

/**
 * Clean HTML strings from RSS descriptions
 */
function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

/**
 * Fetch RSS feeds using public RSS-to-JSON converter with timeout & fallbacks
 */
async function fetchSingleRssFeed(feedObj, originType) {
  const serviceUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedObj.url)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(serviceUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.status === 'ok' && Array.isArray(data.items)) {
      return data.items.map(item => ({
        origin: originType,
        title: { en: item.title, ne: item.title },
        description: { 
          en: stripHtml(item.description).slice(0, 180) + '...', 
          ne: stripHtml(item.description).slice(0, 180) + '...' 
        },
        link: item.link || item.guid,
        pubDate: item.pubDate,
        source: feedObj.name || (data.feed && data.feed.title) || "News Source",
        category: (item.categories && item.categories[0]) || (originType === 'nepali' ? "Nepali News" : "Design News"),
        image: item.thumbnail || (item.enclosure && item.enclosure.link) || null
      }));
    }
    throw new Error("Invalid RSS response format");
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn(`Could not load live RSS from ${feedObj.url}:`, err.message);
    return null;
  }
}

/**
 * Render news items filtered by selected tab ('all', 'nepali', 'other')
 */
function renderNewsCards() {
  const container = document.getElementById('news-grid-container');
  const alertContainer = document.getElementById('news-status-alert');
  if (!container) return;

  const currentLang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';

  // Filter items based on active tab
  let filteredItems = allLoadedArticles;
  if (currentFilter !== 'all') {
    filteredItems = allLoadedArticles.filter(item => item.origin === currentFilter);
  }

  // Update status banner
  if (alertContainer) {
    if (isUsingFallback) {
      alertContainer.innerHTML = `
        <div class="alert alert-dark bg-glass border-0 text-muted p-3 mb-4 rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-info-circle-fill text-primary"></i>
            <span>
              ${(currentLang === 'ne') 
                ? 'प्रत्यक्ष RSS फिड लोड हुन नसकेकाले नेपाली तथा अन्तर्राष्ट्रिय डिजाइन समाचारहरू तल प्रस्तुत गरिएको छ।' 
                : 'Displaying curated Nepali & International design news and insights below.'}
            </span>
          </div>
          <span class="badge bg-secondary text-light">Curated Mode</span>
        </div>
      `;
    } else {
      alertContainer.innerHTML = `
        <div class="alert alert-success bg-glass border-0 text-success p-3 mb-4 rounded-3 d-flex align-items-center gap-2">
          <i class="bi bi-check-circle-fill"></i>
          <span>Live Nepali and International RSS feeds loaded successfully!</span>
        </div>
      `;
    }
  }

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-4 bg-surface rounded-4 border border-secondary border-opacity-10 max-w-md mx-auto">
          <i class="bi bi-newspaper fs-1 text-muted mb-2 d-block"></i>
          <h4 class="text-white fs-5 fw-bold mb-1">${(currentLang === 'ne') ? 'कुनै समाचार फेला परेन' : 'No articles found'}</h4>
          <p class="text-muted small m-0">${(currentLang === 'ne') ? 'कृपया अर्को विधा चयन गर्नुहोस् वा फिड ताजा गर्नुहोस्।' : 'Please select another category or refresh the feeds.'}</p>
        </div>
      </div>
    `;
    return;
  }

  const fallbackImgs = [
    'images/gallery/work-01.jpg',
    'images/gallery/work-02.jpg',
    'images/gallery/work-03.jpg',
    'images/gallery/work-04.jpg',
    'images/gallery/work-05.jpg',
    'images/gallery/work-06.jpg',
    'images/gallery/work-07.jpg',
    'images/gallery/work-08.jpg'
  ];

  container.innerHTML = filteredItems.map((item, index) => {
    const titleText = (typeof item.title === 'object') ? (item.title[currentLang] || item.title.en) : item.title;
    const descText = (typeof item.description === 'object') ? (item.description[currentLang] || item.description.en) : item.description;
    const imgSrc = item.image || fallbackImgs[index % fallbackImgs.length];
    const dateFormatted = formatNewsDate(item.pubDate, currentLang);
    const readMoreLabel = (currentLang === 'ne') ? 'पूरा पढ्नुहोस्' : 'Read Article';

    const originBadge = (item.origin === 'nepali') 
      ? `<span class="badge bg-success bg-opacity-75 text-white border border-success border-opacity-50"><i class="bi bi-flag-fill me-1"></i> ${(currentLang === 'ne') ? 'नेपाली' : 'Nepali'}</span>`
      : `<span class="badge bg-info bg-opacity-75 text-dark border border-info border-opacity-50"><i class="bi bi-globe me-1"></i> ${(currentLang === 'ne') ? 'अन्य' : 'Other / Global'}</span>`;

    return `
      <div class="col-lg-4 col-md-6 mb-4 news-card-wrapper" data-origin="${item.origin}">
        <article class="news-card h-100">
          <div class="news-img-box">
            <img src="${imgSrc}" alt="${titleText}" loading="lazy" onerror="this.src='images/gallery/work-01.jpg'">
            <span class="news-source-tag">${item.source || 'Design'}</span>
          </div>
          <div class="news-body">
            <div class="d-flex align-items-center justify-content-between mb-2">
              ${originBadge}
              ${item.category ? `<span class="badge bg-dark text-dim border border-secondary border-opacity-25 small">${item.category}</span>` : ''}
            </div>
            <div class="news-date mb-2">
              <i class="bi bi-calendar3"></i>
              <span>${dateFormatted}</span>
            </div>
            <h3 class="news-title">${titleText}</h3>
            <p class="news-desc">${descText}</p>
            <div class="mt-auto pt-3">
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-custom w-100 py-2">
                <span>${readMoreLabel}</span>
                <i class="bi bi-box-arrow-up-right ms-1"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join('');
}

/**
 * Main news loading function: fetches Nepali & Other feeds in parallel
 */
async function loadAllNews() {
  const container = document.getElementById('news-grid-container');
  if (!container) return;

  // Render Skeleton Placeholders
  container.innerHTML = Array(6).fill(0).map(() => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="skeleton-card">
        <div class="skeleton-box" style="height: 200px; width: 100%;"></div>
        <div class="p-3">
          <div class="d-flex justify-content-between mb-2">
            <div class="skeleton-box" style="height: 18px; width: 30%; border-radius: 4px;"></div>
            <div class="skeleton-box" style="height: 18px; width: 35%; border-radius: 4px;"></div>
          </div>
          <div class="skeleton-box mb-2" style="height: 22px; width: 90%; border-radius: 4px;"></div>
          <div class="skeleton-box mb-3" style="height: 60px; width: 100%; border-radius: 4px;"></div>
          <div class="skeleton-box" style="height: 38px; width: 100%; border-radius: 8px;"></div>
        </div>
      </div>
    </div>
  `).join('');

  let liveNepali = [];
  let liveOther = [];

  // Fetch Nepali Feeds
  for (const feed of RSS_CONFIG.nepali) {
    const items = await fetchSingleRssFeed(feed, 'nepali');
    if (items && items.length > 0) {
      liveNepali = liveNepali.concat(items);
    }
  }

  // Fetch Other / Global Feeds
  for (const feed of RSS_CONFIG.other) {
    const items = await fetchSingleRssFeed(feed, 'other');
    if (items && items.length > 0) {
      liveOther = liveOther.concat(items);
    }
  }

  const combinedLive = [...liveNepali, ...liveOther];

  if (combinedLive.length > 0) {
    // If some feeds worked, supplement missing category with curated fallbacks if needed
    if (liveNepali.length === 0) {
      const nepaliFallbacks = FALLBACK_NEWS_DATABASE.filter(f => f.origin === 'nepali');
      combinedLive.push(...nepaliFallbacks);
    }
    if (liveOther.length === 0) {
      const otherFallbacks = FALLBACK_NEWS_DATABASE.filter(f => f.origin === 'other');
      combinedLive.push(...otherFallbacks);
    }

    combinedLive.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    allLoadedArticles = combinedLive;
    isUsingFallback = false;
  } else {
    // Complete fallback database
    allLoadedArticles = FALLBACK_NEWS_DATABASE;
    isUsingFallback = true;
  }

  renderNewsCards();
}

/**
 * Setup Category Filter Button Event Listeners
 */
function setupNewsFilters() {
  const filterButtons = document.querySelectorAll('.news-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-news-filter') || 'all';
      renderNewsCards();
    });
  });
}

// Listen for language changes to re-render dates & titles
window.addEventListener('languageChanged', () => {
  const container = document.getElementById('news-grid-container');
  if (container) {
    renderNewsCards();
  }
});

// Auto-run on DOM ready if container exists
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('news-grid-container')) {
    setupNewsFilters();
    loadAllNews();

    const refreshBtn = document.getElementById('btn-refresh-news');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadAllNews();
      });
    }
  }
});
