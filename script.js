// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Close banner
function closeBanner() {
    const banner = document.querySelector('.top-banner');
    banner.classList.add('hidden');
}

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Show success message with yellow styling
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #FCD34D;
            color: #000;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(252, 211, 77, 0.3);
            z-index: 1000;
            font-weight: 600;
            text-align: center;
        ">
            ✅ Registration successful! We will contact you soon.
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none;
                border: none;
                color: #000;
                font-size: 18px;
                margin-left: 10px;
                cursor: pointer;
            ">×</button>
        </div>
    `;
    document.body.appendChild(successMessage);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (successMessage.parentElement) {
            successMessage.remove();
        }
    }, 3000);
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(252, 211, 77, 0.2)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .blog-card, .stat-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Video play button functionality
document.querySelector('.play-button')?.addEventListener('click', function() {
    // Create a modal-like overlay for video
    const videoModal = document.createElement('div');
    videoModal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        ">
            <div style="
                background: white;
                padding: 30px;
                border-radius: 12px;
                text-align: center;
                max-width: 400px;
                margin: 20px;
            ">
                <h3 style="margin-bottom: 15px; color: #111;">🎥 Student Success Story</h3>
                <p style="color: #666; margin-bottom: 20px;">Watch Divya Likhita's journey from learning to earning 34.4 LPA at PayPal!</p>
                <button onclick="this.closest('div').parentElement.remove()" style="
                    background: #FCD34D;
                    color: #000;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    margin-right: 10px;
                ">Play Video</button>
                <button onclick="this.closest('div').parentElement.remove()" style="
                    background: #f3f4f6;
                    color: #666;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                ">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(videoModal);
});

// Button click handlers with enhanced feedback
document.querySelectorAll('.register-btn, .register-now-btn, .talk-expert-btn, .demo-register-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Scroll to registration form or show contact info
        const form = document.querySelector('.registration-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
            form.querySelector('input').focus();
            
            // Highlight the form briefly
            form.style.boxShadow = '0 0 20px rgba(252, 211, 77, 0.5)';
            setTimeout(() => {
                form.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }, 2000);
        }
    });
});

// Course exploration buttons
document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const courseName = this.closest('.course-card').querySelector('h3').textContent;
        
        const courseModal = document.createElement('div');
        courseModal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            ">
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    text-align: center;
                    max-width: 500px;
                    margin: 20px;
                ">
                    <h3 style="margin-bottom: 15px; color: #111;">📚 ${courseName}</h3>
                    <p style="color: #666; margin-bottom: 20px;">Get detailed information about this course, curriculum, and placement opportunities.</p>
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        background: #FCD34D;
                        color: #000;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        margin-right: 10px;
                    ">View Details</button>
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        background: #f3f4f6;
                        color: #666;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 6px;
                        cursor: pointer;
                    ">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(courseModal);
    });
});

// Download brochure buttons
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Simulate file download with feedback
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            this.style.background = '#10B981';
            
            setTimeout(() => {
                this.innerHTML = 'Download Brochure';
                this.disabled = false;
                this.style.background = '#10B981';
            }, 2000);
        }, 1500);
    });
});

// Blog navigation
document.querySelector('.check-blog-btn')?.addEventListener('click', function() {
    window.open('#blog', '_blank');
});

// Social media links with enhanced hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
    
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i').className.split('-')[1];
        
        const socialModal = document.createElement('div');
        socialModal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            ">
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    text-align: center;
                    max-width: 400px;
                    margin: 20px;
                ">
                    <h3 style="margin-bottom: 15px; color: #111;">🔗 Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}</h3>
                    <p style="color: #666; margin-bottom: 20px;">Stay updated with our latest courses, success stories, and tech insights!</p>
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        background: #FCD34D;
                        color: #000;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 600;
                        margin-right: 10px;
                    ">Follow Now</button>
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        background: #f3f4f6;
                        color: #666;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 6px;
                        cursor: pointer;
                    ">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(socialModal);
    });
});

// Form validation with yellow highlights
function validateForm() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            isValid = false;
        } else {
            input.style.borderColor = '#FCD34D';
            input.style.boxShadow = '0 0 0 3px rgba(252, 211, 77, 0.1)';
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation
function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\D/g, ''));
}

// Add real-time validation with yellow accents
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            this.setCustomValidity('Please enter a valid email address');
        } else {
            this.style.borderColor = '#FCD34D';
            this.style.boxShadow = '0 0 0 3px rgba(252, 211, 77, 0.1)';
            this.setCustomValidity('');
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            this.setCustomValidity('Please enter a valid phone number');
        } else {
            this.style.borderColor = '#FCD34D';
            this.style.boxShadow = '0 0 0 3px rgba(252, 211, 77, 0.1)';
            this.setCustomValidity('');
        }
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add loading state to body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add hover sound effect simulation
function playHoverSound() {
    // Simulate sound with visual feedback
    console.log('🔊 Hover sound effect');
}

// Enhanced button interactions
document.querySelectorAll('button, .nav-link, .social-link').forEach(element => {
    element.addEventListener('mouseenter', function() {
        playHoverSound();
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 30);
        }, 500);
    }
});

// Add floating animation to feature icons
document.querySelectorAll('.feature-icon').forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
});

// CSS for floating animation (add to styles)
const floatingCSS = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
`;

// Add the floating CSS to the document
const style = document.createElement('style');
style.textContent = floatingCSS;
document.head.appendChild(style);

// Confetti effect for successful form submission
function createConfetti() {
    const colors = ['#FCD34D', '#F59E0B', '#D97706', '#92400E'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 1000;
            pointer-events: none;
            animation: confetti-fall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Add confetti CSS animation
const confettiCSS = `
@keyframes confetti-fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
`;

const confettiStyle = document.createElement('style');
confettiStyle.textContent = confettiCSS;
document.head.appendChild(confettiStyle);

// Trigger confetti on form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    createConfetti();
});

// Add pulse animation to CTA buttons
setInterval(() => {
    document.querySelectorAll('.register-now-btn, .talk-expert-btn').forEach(btn => {
        btn.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            btn.style.animation = '';
        }, 500);
    });
}, 5000);

// Mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Keep only recent trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);
    
    // Create trail effect on hover over interactive elements
    if (e.target.matches('button, .nav-link, .social-link, .feature-card, .course-card')) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #FCD34D;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: trail-fade 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    }
});

// Add trail fade animation
const trailCSS = `
@keyframes trail-fade {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0);
    }
}
`;

const trailStyle = document.createElement('style');
trailStyle.textContent = trailCSS;
document.head.appendChild(trailStyle);