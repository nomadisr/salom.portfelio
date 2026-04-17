// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const status = document.getElementById('formStatus');
        
        if (!name.trim()) {
            status.textContent = '❌ Iltimos, ismingizni kiriting';
            status.style.color = '#ff6b6b';
            return;
        }
        if (!email.trim() || !email.includes('@')) {
            status.textContent = '❌ Iltimos, to\'g\'ri email kiriting';
            status.style.color = '#ff6b6b';
            return;
        }
        
        status.textContent = '⏳ Yuborilmoqda...';
        status.style.color = '#FFC107';
        
        setTimeout(() => {
            status.textContent = '✅ Xabaringiz qabul qilindi! Tez orada javob beraman.';
            status.style.color = '#03DAC5';
            contactForm.reset();
        }, 1500);
    });
}

// Animation on load
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.4s ease ${index * 0.1}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200);
    });
});

console.log('%c🚀 Ibrohim Norbutayev Portfolio | AI-Powered Developer', 'color: #FFC107; font-size: 16px;');