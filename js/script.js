// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (name.value.trim() === '') {
        valid = false;
        name.style.borderColor = 'red';
    }
    if (email.value.trim() === '' || !email.value.includes('@')) {
        valid = false;
        email.style.borderColor = 'red';
    }
    if (message.value.trim() === '') {
        valid = false;
        message.style.borderColor = 'red';
    }
    
    if (valid) {
        alert('Thank you for contacting Spice & Chai Cafe! We will respond within 24 hours.');
        this.reset();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
