/**
 * Premium Portfolio Website - JavaScript
 * Fixed for Formspree submission
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initCustomCursor();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initProjectModals();
    initContactForm(); // সংশোধিত ফাংশন
    initBackToTop();
    initParticles();
    initRevealAnimations();
    initRippleButtons();
});

/**
 * Contact Form - Formspree integration with design preservation
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        // এখানে e.preventDefault() সরিয়ে দেওয়া হয়েছে যাতে Formspree কাজ করতে পারে
        
        // বাটন এনিমেশন শুরু
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';

        // ফর্মটি স্বাভাবিকভাবে সাবমিট হবে এবং Formspree-তে চলে যাবে
    });
}

/**
 * Loading Screen
 */
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        setTimeout(() => {
            loadingScreen.remove();
        }, 800);
    }, 2500);
}

/**
 * Custom Cursor
 */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    const hoverables = document.querySelectorAll('a, button, .project-card, .tool-item, .about-card');
    hoverables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.width = '16px';
            cursor.style.height = '16px';
            follower.style.width = '50px';
            follower.style.height = '50px';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            follower.style.width = '30px';
            follower.style.height = '30px';
        });
    });
}

/**
 * Navigation
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-card, .section-title, .section-subtitle, .skill-item, .project-card, .tool-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < window.innerHeight - 150) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/**
 * Skill Bars
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
                bar.style.width = progress + '%';
            }
        });
    };
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
}

/**
 * Project Modals
 */
function initProjectModals() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose?.addEventListener('click', () => {
        modalOverlay?.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

/**
 * Back to Top
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTopBtn?.classList.add('active');
        else backToTopBtn?.classList.remove('active');
    });
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

/**
 * Particles Background
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: rgba(108, 99, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 20 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
}

/**
 * Reveal Animations Initialization
 */
function initRevealAnimations() {
    document.querySelectorAll('.about-card, .skill-item, .project-card, .tool-item, .info-item').forEach(el => {
        el.classList.add('reveal-card');
    });
}

/**
 * Ripple Buttons
 */
function initRippleButtons() {
    document.querySelectorAll('.ripple-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            ripple.classList.add('ripple-effect'); // CSS এ এনিমেশন থাকতে হবে
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}