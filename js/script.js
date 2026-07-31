// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('mainNav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});

// ===== CLOSE MENU ON LINK CLICK =====
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', function() {
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('mainNav');
        if (hamburger && nav) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});

// ===== ACTIVE NAV LINK =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#mainNav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Reset styles
            [name, email, message].forEach(field => {
                if (field) field.style.borderColor = '#E8E8E8';
            });
            
            // Validate Name
            if (name && name.value.trim() === '') {
                name.style.borderColor = '#FF6B35';
                isValid = false;
            }
            
            // Validate Email
            if (email && (email.value.trim() === '' || !email.value.includes('@'))) {
                email.style.borderColor = '#FF6B35';
                isValid = false;
            }
            
            // Validate Message
            if (message && message.value.trim() === '') {
                message.style.borderColor = '#FF6B35';
                isValid = false;
            }
            
            if (isValid) {
                alert('✅ Thank you for contacting Island Spice Cafe! We will respond within 24 hours.\n\n🇬🇾 Taste the Islands!');
                form.reset();
            } else {
                alert('⚠️ Please fill in all required fields correctly.');
            }
        });
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
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

// ===== SCROLL EFFECT FOR HEADER =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        } else {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        }
    }
});

console.log('🇬🇾 Island Spice Cafe - Taste the Islands! 🌴');
