// ============================================
// Navigation & Mobile Menu
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Sticky navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Parallax Effects
// ============================================

const parallaxElements = document.querySelectorAll('.hero-background, .floating-shapes .shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;

    parallaxElements.forEach((element, index) => {
        if (element.classList.contains('shape')) {
            const speed = (index + 1) * 0.2;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        } else {
            element.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Mouse parallax for hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = hero;
        const xPos = (clientX / offsetWidth - 0.5) * 20;
        const yPos = (clientY / offsetHeight - 0.5) * 20;

        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        }
    });
}

// ============================================
// 3D Card Tilt Effect
// ============================================

const cards = document.querySelectorAll('.glass-card, .project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// Animated Counter for Stats
// ============================================

const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const statNumbers = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// Animated Skill Bars
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const width = entry.target.getAttribute('data-width');
            setTimeout(() => {
                entry.target.style.width = width + '%';
            }, 200);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillsObserver.observe(bar);
});

// ============================================
// Fade In on Scroll
// ============================================

const fadeElements = document.querySelectorAll('.fade-in-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For this example, we'll just show an alert
        console.log('Form submitted:', data);
        
        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<span>Message Sent! ✓</span>';
        button.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// ============================================
// Set Current Year in Footer
// ============================================

const yearElements = document.querySelectorAll('#currentYear');
yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// ============================================
// Profile Image Loading Fallback
// ============================================

const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('error', function() {
        // If profile image fails to load, create a gradient placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
            margin: 0 auto;
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
        `;
        placeholder.textContent = '👤';
        profileImage.parentElement.appendChild(placeholder);
    });
}

// ============================================
// Project Cards Hover Effects
// ============================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease-out';
    });
});

// ============================================
// Page Load Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate hero elements
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const profileImageWrapper = document.querySelector('.profile-image-wrapper');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.animation = 'fadeInUp 0.8s ease-out';
        }, 300);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
        }, 400);
    }
    
    if (profileImageWrapper) {
        setTimeout(() => {
            profileImageWrapper.style.animation = 'fadeInUp 0.8s ease-out 0.1s both';
        }, 200);
    }
});

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

// ============================================
// Keyboard Accessibility
// ============================================

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.focus();
    }
});

// ============================================
// Performance Optimization
// ============================================

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll handlers
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations are already handled above
}, 16));
