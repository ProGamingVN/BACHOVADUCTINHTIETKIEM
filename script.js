// Smooth scroll behavior
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-up, .card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Story expand/collapse functionality
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const storyCard = this.closest('.story-card');
        const expandedContent = storyCard.querySelector('.story-expanded');
        
        expandedContent.classList.toggle('active');
        
        if (expandedContent.classList.contains('active')) {
            this.textContent = 'Thu gọn ▲';
        } else {
            this.textContent = 'Xem thêm ▼';
        }
    });
});

// QR Code download functionality
const downloadQR = () => {
    const qrImage = document.querySelector('.qr-image img');
    if (qrImage) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'QR-Website-Bac-Ho.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Share functionality
const shareWebsite = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Bác Hồ và Đức Tính Tiết Kiệm',
            text: 'Khám phá và học hỏi về tư tưởng tiết kiệm của Chủ tịch Hồ Chí Minh',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Đã sao chép đường link vào clipboard!');
        });
    }
};

// Add event listeners for QR buttons if they exist
window.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-qr');
    const shareBtn = document.getElementById('share-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadQR);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareWebsite);
    }
});

// Add hover effects for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Mobile menu toggle (if needed in future)
const initMobileMenu = () => {
    // Mobile menu functionality can be added here if needed
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    
    // Add loading animation removal
    document.body.classList.add('loaded');
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-decoration');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
