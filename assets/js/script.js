// ===== PRELOADER =====
window.addEventListener('load', function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hide');
        }
    }, 1000);
});

// ===== TYPING EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    var typedText = document.getElementById('typed-text');
    if (typedText) {
        var phrases = ['ग्राफिक डिजाइनर', 'UI/UX डिजाइनर', 'वेब डिजाइनर', 'फ्रिलान्सर'];
        var phraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var typingTimeout;

        function typeEffect() {
            var current = phrases[phraseIndex];
            if (isDeleting) {
                typedText.textContent = current.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typingTimeout = setTimeout(typeEffect, 400);
                    return;
                }
                typingTimeout = setTimeout(typeEffect, 50);
            } else {
                typedText.textContent = current.substring(0, charIndex++);
                if (charIndex > current.length) {
                    isDeleting = true;
                    typingTimeout = setTimeout(typeEffect, 1500);
                    return;
                }
                typingTimeout = setTimeout(typeEffect, 80);
            }
        }
        typeEffect();
    }
});

// ===== COUNTER ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    var counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        setTimeout(function() {
            counters.forEach(function(counter) {
                var target = parseInt(counter.getAttribute('data-target'));
                var current = 0;
                var increment = Math.ceil(target / 150);

                function updateCounter() {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        return;
                    }
                    counter.textContent = current;
                    requestAnimationFrame(updateCounter);
                }
                updateCounter();
            });
        }, 500);
    }
});

// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', function() {
    var revealElements = document.querySelectorAll('.glass-card, .stat-card, .gallery-card, .blog-card, .service-card');
    
    revealElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        revealElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - 80) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    setTimeout(revealOnScroll, 500);
});

// ===== STICKY NAVBAR =====
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('mainNav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
                nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.85)';
                nav.style.boxShadow = 'none';
            }
        });
    }
});

// ===== BACK TO TOP =====
document.addEventListener('DOMContentLoaded', function() {
    var backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });
        
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ===== ACTIVE NAV LINK =====
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== FORM VALIDATION =====
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var inputs = contactForm.querySelectorAll('input, textarea');
            var valid = true;
            inputs.forEach(function(input) {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            if (valid) {
                alert('✅ तपाईंको सन्देश पठाइयो! धन्यवाद।');
                contactForm.reset();
            } else {
                alert('⚠️ कृपया सबै आवश्यक फिल्डहरू भर्नुहोस्।');
            }
        });
    }
});

console.log('🚀 Website loaded successfully!');
