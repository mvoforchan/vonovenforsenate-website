// Mobile Menu Toggle - Enhanced for mobile devices
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        // Debug: Log if elements are found
        console.log('Mobile menu toggle found:', !!mobileMenuToggle);
        console.log('Nav menu found:', !!navMenu);
        
        if (!mobileMenuToggle || !navMenu) {
            console.error('Mobile menu elements not found!');
            return;
        }
        
        // Flag to prevent double-firing
        let isToggling = false;
        
        // Main toggle function
        function toggleMenu(e) {
            if (isToggling) return;
            isToggling = true;
            
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            console.log('Toggle menu called');
            
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            } else {
                navMenu.classList.add('active');
                mobileMenuToggle.classList.add('active');
            }
            
            // Animate hamburger
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (!isActive) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // Reset flag after animation
            setTimeout(function() {
                isToggling = false;
            }, 300);
        }
        
        // Function to close menu
        function closeMenu() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Add event listeners - try multiple approaches
        // Method 1: touchstart (primary for mobile)
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            console.log('Touchstart detected');
            toggleMenu(e);
        }, { passive: false });
        
        // Method 2: click (fallback and for desktop)
        mobileMenuToggle.addEventListener('click', function(e) {
            console.log('Click detected');
            toggleMenu(e);
        });
        
        // Method 3: pointer events (modern approach)
        if ('PointerEvent' in window) {
            mobileMenuToggle.addEventListener('pointerdown', function(e) {
                console.log('Pointerdown detected');
                if (e.pointerType === 'touch') {
                    toggleMenu(e);
                }
            });
        }
        
        // Close menu when clicking menu items
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                console.log('Menu link clicked');
                // Don't close immediately - let navigation happen first
                setTimeout(function() {
                    closeMenu();
                }, 100);
            });
            // Remove the touchstart listener entirely - it's interfering
        });
        
        // Close menu when clicking/touching outside
        document.addEventListener('touchstart', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    console.log('Touched outside, closing menu');
                    closeMenu();
                }
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    console.log('Clicked outside, closing menu');
                    closeMenu();
                }
            }
        });
        
        console.log('Mobile menu initialized successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();

// Smooth Scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#donate') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Navbar scroll effect
(function() {
    const nav = document.querySelector('.main-nav');
    
    if (nav) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                nav.style.boxShadow = '0 2px 20px rgba(26, 47, 75, 0.08)';
            } else {
                nav.style.boxShadow = '0 2px 20px rgba(26, 47, 75, 0.15)';
            }
            
            lastScroll = currentScroll;
        });
    }
})();

// Form submission placeholder
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            if (this.classList.contains('signup-form') || this.classList.contains('contact-form')) {
                e.preventDefault();
                alert('Form submission will be connected to your email service provider (Mailchimp, MailerLite, etc.)');
            }
        });
    });
});

// Animate elements on scroll
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.addEventListener('DOMContentLoaded', function() {
        const animateElements = document.querySelectorAll('.issue-card, .result-item, .value-card, .bio-block');
        animateElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    });
})();