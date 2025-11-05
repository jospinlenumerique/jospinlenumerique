// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 200);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}

// Initialize skill bars with 0 width
window.addEventListener('load', () => {
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
});

// Scroll animations
window.addEventListener('scroll', () => {
    animateSkillBars();
    
    // Header shadow on scroll
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        header.style.padding = '20px 0';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name') || 'Non spécifié';
        
        // Show success message (in a real app, you would send the data to a server)
        alert(`Merci ${name} ! Votre message a été envoyé. Je vous répondrai dans les plus brefs délais.`);
        
        // Reset form
        this.reset();
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero section
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateY(0)';
    }, 600);
    
    // Set initial styles for animation
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';
    heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateY(20px)';
    heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});