/**
 * Narayan Prasad Mishra — Bilingual Language Module (English / नेपाली)
 * Provides dynamic client-side translation and persistent language preference.
 */

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_news: "News",
    nav_contact: "Contact",
    nav_hire_me: "Hire Me",
    nav_lang_btn: "नेपाली",

    // Brand
    brand_name: "Narayan Prasad Mishra",
    brand_role: "Creative Designer & Software Developer",
    location_badge: "Mishra Niwash, Butwal-12, Nayagaun, Nepal",
    status_available: "Available for Projects",

    // Hero Section
    hero_greeting: "Hello, I'm",
    hero_name: "Narayan Prasad Mishra",
    hero_role: "Creative Designer & Software Developer",
    hero_lead: "Creative Designer & Software Developer bridging visual aesthetics with robust code to craft modern brand identities, intuitive UI/UX, and high-performance digital solutions.",
    hero_btn_work: "View My Work",
    hero_btn_about: "About Me",
    hero_btn_cv: "Download CV",
    hero_tag_exp: "Years Experience",
    hero_tag_clients: "Client Satisfaction",

    // Statistics Section
    stat_designs: "Design & Dev Projects",
    stat_branding: "Branding & Web Apps",
    stat_experience: "Years of Experience",
    stat_clients: "Happy Clients",

    // Section Titles & Subtitles
    sec_featured_work_sub: "Featured Portfolio",
    sec_featured_work_title: "Selected Design & Software Works",
    sec_services_sub: "What I Offer",
    sec_services_title: "Design & Software Development Services",
    sec_services_desc: "Blending creative graphic design, brand strategy, and modern software engineering to deliver end-to-end digital solutions.",
    sec_about_sub: "About Me",
    sec_about_title: "Where Creative Design Meets Modern Software Engineering",
    sec_gallery_sub: "Portfolio Showcase",
    sec_gallery_title: "Creative Design & Software Showcase",
    sec_news_sub: "Design & Tech Insights",
    sec_news_title: "Latest Design & Technology Articles",
    sec_contact_sub: "Get In Touch",
    sec_contact_title: "Let's Build Something Remarkable Together",

    // Services
    srv_graphic_title: "Graphic & UI/UX Design",
    srv_graphic_desc: "Creative visual identities, user interfaces, digital graphics, and print assets crafted with aesthetic precision.",
    srv_logo_title: "Logo & Brand Identity",
    srv_logo_desc: "Professional logo systems, comprehensive brand guidelines, color palettes, typography, and marketing kits.",
    srv_branding_title: "Software & Web Development",
    srv_branding_desc: "Modern responsive websites, custom web applications, and software tools built with clean, scalable code.",
    srv_social_title: "Social Media & Digital Content",
    srv_social_desc: "High-engagement social media campaigns, marketing banners, and motion graphics tailored for modern platforms.",
    srv_print_title: "Print & Packaging Design",
    srv_print_desc: "Prepress-ready brochures, flyers, posters, packaging boxes, and business stationery with precision print standards.",
    srv_photo_title: "Creative Visual Engineering",
    srv_photo_desc: "Advanced visual retouching, digital compositions, asset optimization, and interactive design integrations.",

    // Gallery Filters
    filter_all: "All Works",
    filter_logo: "Logo & Brand",
    filter_branding: "Branding",
    filter_social: "Social Media",
    filter_print: "Print Design",
    filter_creative: "Creative & Software",
    gallery_view_project: "View Project",
    gallery_tools_label: "Tools & Technologies",
    gallery_client_label: "Client / Concept",
    gallery_year_label: "Year",
    gallery_category_label: "Category",

    // About Page
    about_bio_heading: "Biography & Background",
    about_bio_p1: "I am Narayan Prasad Mishra, a passionate Creative Designer and Software Developer based in Butwal-12, Nayagaun, Nepal. I blend intuitive visual design with modern software engineering to build powerful brand experiences and software applications.",
    about_bio_p2: "My dual expertise spans brand identity, UI/UX design, print media, modern web applications, and software development. By understanding both the creative visual side and the engineering logic, I bridge the gap between design concepts and scalable digital solutions.",
    about_philosophy_heading: "Design & Engineering Philosophy",
    about_philosophy_text: "Great products live at the intersection of stunning visual design and robust engineering. Design gives software soul and usability, while clean code brings creativity to life.",
    about_skills_heading: "Design & Technical Skills",
    about_personal_details: "Personal Details",
    about_view_cv: "View CV (PDF)",
    about_download_cv: "Download CV",
    about_contact_btn: "Contact Me",
    about_location_label: "Address",
    about_phone_label: "Phone",
    about_email_label: "Email",
    about_profession_label: "Profession",
    about_profession_val: "Creative Designer & Software Developer",
    about_experience_label: "Experience",
    about_experience_val: "5+ Years in Industry",
    about_availability_label: "Availability",
    about_availability_val: "Available for Projects & Freelance",
    about_languages_label: "Languages",
    about_languages_val: "Nepali, English, Hindi",
    about_experience_heading: "Professional Experience",

    // News Page
    news_feed_loading: "Loading latest design & tech news...",
    news_feed_error: "Unable to load live RSS feed directly due to network or CORS. Displaying curated design & tech insights below.",
    news_read_more: "Read Article",
    news_source: "Source",
    news_filter_all: "All Articles",
    news_filter_nepali: "Nepali News",
    news_filter_other: "Tech & Global",
    news_tag_nepali: "Nepali",
    news_tag_other: "Tech & Global",
    news_refresh: "Refresh Feeds",

    // Contact Page
    contact_phone_title: "Call Directly",
    contact_email_title: "Email Address",
    contact_location_title: "Studio / Residence",
    contact_phone_val: "9867549675",
    contact_email_val: "menpmishra@gmail.com",
    contact_location_val: "Mishra Niwash, Butwal-12, Nayagaun, Nepal",
    contact_form_heading: "Send a Message",
    contact_name_label: "Full Name",
    contact_email_label: "Email Address",
    contact_subject_label: "Subject",
    contact_service_label: "Required Service",
    contact_msg_label: "Your Message / Project Details",
    contact_btn_send: "Send Message via Email",
    contact_copy_feedback: "Copied to clipboard!",
    contact_success_msg: "Thank you! Your message client will open now.",

    // Footer
    footer_desc: "Narayan Prasad Mishra is a Creative Designer & Software Developer based in Butwal, Nepal, crafting impactful visual identities, UI/UX, and modern software solutions.",
    footer_quick_links: "Quick Navigation",
    footer_services_links: "Services",
    footer_contact_info: "Contact Information",
    footer_copyright: "© 2026 Narayan Prasad Mishra. All Rights Reserved.",
    footer_address: "Mishra Niwash, Butwal-12, Nepal",
    footer_phone: "Phone: 9867549675",
    footer_email: "Email: menpmishra@gmail.com",

    // Common / UI
    btn_learn_more: "Learn More",
    btn_close: "Close",
    loading_text: "Loading...",
    tag_featured: "Featured Project"
  },

  ne: {
    // Navigation
    nav_home: "गृहपृष्ठ",
    nav_about: "मेरो बारेमा",
    nav_services: "सेवाहरू",
    nav_gallery: "ग्यालरी",
    nav_news: "समाचार",
    nav_contact: "सम्पर्क",
    nav_hire_me: "काम दिनुहोस्",
    nav_lang_btn: "English",

    // Brand
    brand_name: "नारायण प्रसाद मिश्र",
    brand_role: "क्रिएटिभ डिजाइनर तथा सफ्टवेयर डेभलपर",
    location_badge: "मिश्र निवास, बुटवल-१२, नयाँगाउँ, नेपाल",
    status_available: "नयाँ प्रोजेक्टका लागि उपलब्ध",

    // Hero Section
    hero_greeting: "नमस्ते, म",
    hero_name: "नारायण प्रसाद मिश्र",
    hero_role: "क्रिएटिभ डिजाइनर तथा सफ्टवेयर डेभलपर",
    hero_lead: "सिर्जनात्मक डिजाइन र आधुनिक सफ्टवेयर विकासको उत्कृष्ट संयोजनमार्फत प्रभावकारी ब्रान्ड पहिचान, आकर्षक UI/UX तथा आधुनिक डिजिटल प्रविधि निर्माण।",
    hero_btn_work: "मेरो काम हेर्नुहोस्",
    hero_btn_about: "मेरो बारेमा",
    hero_btn_cv: "सिभी डाउनलोड",
    hero_tag_exp: "वर्षको अनुभव",
    hero_tag_clients: "सन्तुष्ट ग्राहकहरू",

    // Statistics Section
    stat_designs: "डिजाइन तथा सफ्टवेयर प्रोजेक्ट",
    stat_branding: "ब्रान्डिङ तथा वेब एप्लिकेसन",
    stat_experience: "वर्षको अनुभव",
    stat_clients: "सन्तुष्ट ग्राहक",

    // Section Titles & Subtitles
    sec_featured_work_sub: "उत्कृष्ट कार्यहरू",
    sec_featured_work_title: "चयन गरिएका डिजाइन तथा सफ्टवेयर कार्यहरू",
    sec_services_sub: "मेरा सेवाहरू",
    sec_services_title: "डिजाइन तथा सफ्टवेयर विकास सेवाहरू",
    sec_services_desc: "सिर्जनात्मक ग्राफिक्स डिजाइन, ब्रान्डिङ तथा आधुनिक सफ्टवेयर इन्जिनियरिङमार्फत सम्पूर्ण डिजिटल समाधान।",
    sec_about_sub: "परिचय",
    sec_about_title: "सिर्जनात्मक डिजाइन र आधुनिक कोडिङको संयोजन",
    sec_gallery_sub: "कार्य प्रदर्शनी",
    sec_gallery_title: "डिजाइन तथा सफ्टवेयर ग्यालरी",
    sec_news_sub: "डिजाइन तथा प्रविधि अपडेट",
    sec_news_title: "नवीनतम डिजाइन तथा प्रविधि समाचार",
    sec_contact_sub: "सम्पर्क गर्नुहोस्",
    sec_contact_title: "नयाँ डिजाइन तथा सफ्टवेयर प्रोजेक्ट सुरु गरौं",

    // Services
    srv_graphic_title: "ग्राफिक्स तथा UI/UX डिजाइन",
    srv_graphic_desc: "डिजिटल तथा प्रिन्ट माध्यमका लागि सिर्जनात्मक दृश्य डिजाइन, युजर इन्टरफेस र आधुनिक भिजुअल पहिचान।",
    srv_logo_title: "लोगो तथा ब्रान्डिङ",
    srv_logo_desc: "व्यवसाय तथा संस्थाको पहिचान झल्काउने स्तरीय लोगो, रङ संयोजन, फन्ट तथा मार्केटिङ सामग्री निर्माण।",
    srv_branding_title: "सफ्टवेयर तथा वेब विकास",
    srv_branding_desc: "आधुनिक रेस्पोन्सिभ वेबसाइट, वेब एप्लिकेसन र सफ्टवेयर समाधानहरू सफा र स्तरीय कोडिङसहित।",
    srv_social_title: "सामाजिक सञ्जाल तथा डिजिटल कन्टेन्ट",
    srv_social_desc: "फेसबुक, इन्स्टाग्राम लगायतका सञ्जालका लागि आकर्षक पोस्ट, ब्यानर तथा डिजिटल प्रचार सामग्री।",
    srv_print_title: "प्रिन्ट तथा प्याकेजिङ डिजाइन",
    srv_print_desc: "ब्रोसर, फ्लायर, पोस्टर, भिजिटिङ कार्ड, ब्यानर तथा उत्पादन प्याकेजिङ प्रिन्ट डिजाइन।",
    srv_photo_title: "सिर्जनात्मक भिजुअल इन्जिनियरिङ",
    srv_photo_desc: "उच्च गुणस्तरको फोटो सम्पादन, डिजिटल कम्पोजिसन तथा अन्तरक्रियात्मक डिजाइन समाधान।",

    // Gallery Filters
    filter_all: "सबै कार्यहरू",
    filter_logo: "लोगो र ब्रान्ड",
    filter_branding: "ब्रान्डिङ",
    filter_social: "सामाजिक सञ्जाल",
    filter_print: "प्रिन्ट डिजाइन",
    filter_creative: "सिर्जनात्मक र सफ्टवेयर",
    gallery_view_project: "विस्तृत हेर्नुहोस्",
    gallery_tools_label: "प्रयोग भएका औजार तथा प्रविधि",
    gallery_client_label: "ग्राहक / अवधारणा",
    gallery_year_label: "वर्ष",
    gallery_category_label: "विधा",

    // About Page
    about_bio_heading: "मेरो जीवनी र अनुभव",
    about_bio_p1: "म नारायण प्रसाद मिश्र, बुटवल-१२, नयाँगाउँ, नेपालबाट एक समर्पित क्रिएटिभ डिजाइनर तथा सफ्टवेयर डेभलपर हुँ। म आकर्षक भिजुअल डिजाइन र आधुनिक सफ्टवेयर इन्जिनियरिङको संयोजनमार्फत स्तरीय ब्रान्ड तथा डिजिटल सफ्टवेयर निर्माण गर्दछु।",
    about_bio_p2: "मेरो दक्षता ब्रान्ड पहिचान, UI/UX डिजाइन, प्रिन्ट मिडियाका साथै आधुनिक वेब तथा सफ्टवेयर विकासमा फैलिएको छ। डिजाइन कला र प्राविधिक कोड दुवै बुझेर म सुन्दर सोचलाई वास्तविक र प्रभावकारी डिजिटल समाधानमा रूपान्तरण गर्दछु।",
    about_philosophy_heading: "मेरो डिजाइन तथा इन्जिनियरिङ दर्शन",
    about_philosophy_text: "उत्कृष्ट डिजिटल उत्पादन आकर्षक डिजाइन र भरपर्दो कोडिङको संगमबाट बन्छ। डिजाइनले सफ्टवेयरलाई सुन्दर र सहज बनाउँछ भने सफा कोडले सिर्जनशीलतालाई जीवित तुल्याउँछ।",
    about_skills_heading: "डिजाइन तथा प्राविधिक दक्षता",
    about_personal_details: "व्यक्तिगत विवरण",
    about_view_cv: "सिभी हेर्नुहोस् (PDF)",
    about_download_cv: "सिभी डाउनलोड",
    about_contact_btn: "सम्पर्क गर्नुहोस्",
    about_location_label: "ठेगाना",
    about_phone_label: "फोन सम्पर्क",
    about_email_label: "इमेल ठेगाना",
    about_profession_label: "पेशा",
    about_profession_val: "क्रिएटिभ डिजाइनर तथा सफ्टवेयर डेभलपर",
    about_experience_label: "कार्य अनुभव",
    about_experience_val: "५+ वर्षको व्यावसायिक अनुभव",
    about_availability_label: "उपलब्धता",
    about_availability_val: "नयाँ प्रोजेक्टका लागि उपलब्ध",
    about_languages_label: "भाषाहरू",
    about_languages_val: "नेपाली, अंग्रेजी, हिन्दी",
    about_experience_heading: "व्यावसायिक अनुभव",

    // News Page
    news_feed_loading: "समाचार लोड हुँदैछ...",
    news_feed_error: "प्रत्यक्ष RSS फिड लोड हुन नसकेकाले पछिल्ला डिजाइन तथा प्रविधि जानकारीहरू तल प्रस्तुत गरिएको छ।",
    news_read_more: "पूरा पढ्नुहोस्",
    news_source: "स्रोत",
    news_filter_all: "सबै समाचार",
    news_filter_nepali: "नेपाली समाचार",
    news_filter_other: "प्रविधि / अन्तर्राष्ट्रिय",
    news_tag_nepali: "नेपाली",
    news_tag_other: "प्रविधि",
    news_refresh: "ताजा गर्नुहोस्",

    // Contact Page
    contact_phone_title: "फोन सम्पर्क",
    contact_email_title: "इमेल ठेगाना",
    contact_location_title: "कार्यालय / निवास ठेगाना",
    contact_phone_val: "९८६७५४९६७५",
    contact_email_val: "menpmishra@gmail.com",
    contact_location_val: "मिश्र निवास, बुटवल-१२, नयाँगाउँ, नेपाल",
    contact_form_heading: "सन्देश पठाउनुहोस्",
    contact_name_label: "तपाईंको पूरा नाम",
    contact_email_label: "इमेल ठेगाना",
    contact_subject_label: "विषय",
    contact_service_label: "आवश्यक सेवा",
    contact_msg_label: "तपाईंको सन्देश वा प्रोजेक्ट विवरण",
    contact_btn_send: "इमेलमार्फत सन्देश पठाउनुहोस्",
    contact_copy_feedback: "क्लिपबोर्डमा प्रतिलिपि भयो!",
    contact_success_msg: "धन्यवाद! तपाईंको इमेल क्लाइन्ट खुल्नेछ।",

    // Footer
    footer_desc: "नारायण प्रसाद मिश्र बुटवल, नेपालका एक क्रिएटिभ डिजाइनर तथा सफ्टवेयर डेभलपर हुनुहुन्छ, जसले ब्रान्डिङ, UI/UX, डिजिटल मिडिया र आधुनिक सफ्टवेयर निर्माणमा काम गर्नुहुन्छ।",
    footer_quick_links: "द्रुत लिङ्कहरू",
    footer_services_links: "सेवाहरू",
    footer_contact_info: "सम्पर्क विवरण",
    footer_copyright: "© २०२६ नारायण प्रसाद मिश्र। सर्वाधिकार सुरक्षित।",
    footer_address: "मिश्र निवास, बुटवल-१२, नेपाल",
    footer_phone: "फोन: ९८६७५४९६७५",
    footer_email: "इमेल: menpmishra@gmail.com",

    // Common / UI
    btn_learn_more: "थप जान्नुहोस्",
    btn_close: "बन्द गर्नुहोस्",
    loading_text: "लोड हुँदैछ...",
    tag_featured: "विशेष प्रोजेक्ट"
  }
};

const STORAGE_KEY = 'npm_portfolio_language';

/**
 * Get the currently selected language
 */
function getCurrentLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'ne' || saved === 'en') {
    return saved;
  }
  return 'en';
}

/**
 * Apply translations to all DOM elements with data-i18n attributes
 */
function applyLanguage(lang) {
  const currentLang = (lang === 'ne') ? 'ne' : 'en';
  const dict = translations[currentLang];

  if (!dict) return;

  // Toggle class on body for specific font handling
  if (currentLang === 'ne') {
    document.body.classList.add('lang-ne');
  } else {
    document.body.classList.remove('lang-ne');
  }

  // Translate text content
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholder attributes
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Translate title attributes
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Update switcher button label
  const switcherBtns = document.querySelectorAll('.lang-switcher-btn');
  switcherBtns.forEach((btn) => {
    btn.innerHTML = (currentLang === 'en') 
      ? '<i class="bi bi-translate"></i> <span class="active-lang">EN</span> | <span>नेपाली</span>' 
      : '<i class="bi bi-translate"></i> <span>EN</span> | <span class="active-lang">नेपाली</span>';
  });

  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, currentLang);

  // Dispatch custom event for other scripts (e.g. news or dynamic components)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

/**
 * Toggle between English and Nepali
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = (current === 'en') ? 'ne' : 'en';
  applyLanguage(next);
}

/**
 * Initialize language on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getCurrentLanguage();
  applyLanguage(initialLang);

  // Attach click listener to language switcher buttons
  const switcherBtns = document.querySelectorAll('.lang-switcher-btn');
  switcherBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });
});
