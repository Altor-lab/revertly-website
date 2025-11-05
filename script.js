// ===================================
// REVERTLY - INTERACTIVE FEATURES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            mobileMenu.hidden = expanded;
            document.body.classList.toggle('menu-open', !expanded);
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.hidden = true;
                document.body.classList.remove('menu-open');
            });
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileMenu.hidden) {
                navToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.hidden = true;
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe platform cards
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });
    
    // ===================================
    // NAVBAR BACKGROUND ON SCROLL
    // ===================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(12, 13, 15, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(12, 13, 15, 0.8)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // HERO STATS COUNTER ANIMATION
    // ===================================
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (stats.length > 0) {
        statsObserver.observe(stats[0].parentElement.parentElement);
    }
    
    function animateStats() {
        stats.forEach(stat => {
            const text = stat.textContent;
            stat.style.opacity = '0';
            
            setTimeout(() => {
                stat.style.transition = 'opacity 0.6s ease';
                stat.style.opacity = '1';
            }, 200);
        });
    }
    
    // ===================================
    // BUTTON RIPPLE EFFECT
    // ===================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // ===================================
    // PARALLAX EFFECT FOR HERO
    // ===================================
    const heroGradient = document.querySelector('.hero-gradient');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroGradient && scrolled < window.innerHeight) {
            heroGradient.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
    
    // ===================================
    // FEATURE CARD TILT EFFECT
    // ===================================
    featureCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ===================================
    // EMAIL FORM HANDLING
    // ===================================
    const pilotForm = document.getElementById('pilot-form');
    const emailInput = document.getElementById('email-input');
    const nameInput = document.getElementById('name-input');
    const companyInput = document.getElementById('company-input');
    const contextInput = document.getElementById('context-input');
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    const formMessage = document.getElementById('form-message');

    if (pilotForm) {
        pilotForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            const emailNormalized = email.toLowerCase();
            const name = nameInput.value.trim();
            const company = companyInput.value.trim();
            const context = contextInput.value.trim();
            const endpoint = (pilotForm.dataset.endpoint || '').trim();

            // Basic validation
            if (!name) {
                showMessage('Please add your full name so we know who to contact.', 'error', true);
                return;
            }

            if (!company) {
                showMessage('Please tell us which company or organization you represent.', 'error', true);
                return;
            }

            if (!email || !email.includes('@') || emailNormalized.endsWith('@gmail.com') || emailNormalized.endsWith('@yahoo.com')) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            if (!context) {
                showMessage('Share a short description of what your agents touch today.', 'error', true);
                return;
            }

            if (!privacyCheckbox.checked) {
                showMessage('Please acknowledge the pilot privacy notice.', 'error', true);
                return;
            }

            // Show loading state
            const submitBtn = pilotForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            const payload = {
                name,
                company,
                email,
                context,
                timestamp: new Date().toISOString()
            };

            try {
                if (endpoint) {
                    await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                } else {
                    launchMailto(payload);
                }

                showMessage('✓ Thanks! A founder will reach out within 48 hours.', 'success');
                pilotForm.reset();
                if (privacyCheckbox) {
                    privacyCheckbox.checked = false;
                }
            } catch (error) {
                console.error('Pilot form submission failed', error);
                launchMailto(payload);
                showMessage('✉️ We opened an email draft for you. Send it and a founder will respond quickly.', 'success', true);
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    function launchMailto({ name, company, email, context }) {
        const subject = encodeURIComponent(`Revertly Pilot Request – ${company}`);
        const body = encodeURIComponent(
`Name: ${name}
Company: ${company}
Email: ${email}
Agent footprint:
${context}
`
        );
        window.location.href = `mailto:founders@revertly.app?subject=${subject}&body=${body}`;
    }

    function showMessage(message, type, persistent = false) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        if (type === 'success' && !persistent) {
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        }
    }

    // ===================================
    // CONSOLE EASTER EGG
    // ===================================
    console.log('%c🚀 Revertly AI', 'font-size: 24px; font-weight: bold; background: linear-gradient(269deg, #1D8BA9 3.05%, #6ABBD1 26.64%, #FF8E40 50.22%, #FF594F 97.4%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cGit for AI Agents', 'font-size: 14px; color: #6ABBD1;');
    console.log('%cInterested in our pilot program? Submit your email on the site!', 'font-size: 12px; color: #888;');
    
});

// ===================================
// ADD RIPPLE EFFECT STYLES
// ===================================
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
