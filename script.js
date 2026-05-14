// Mobile menu toggle (simple)
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '24px';
                navLinks.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                navLinks.style.gap = '18px';
                navLinks.style.zIndex = '99';
            }
        });
    }
    
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // close mobile menu if open
                if (navLinks && navLinks.style.display === 'flex' && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
    
    // Formulaire inscription – simulation envoi (message console + alerte)
    const form = document.getElementById('accessForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const prenom = document.getElementById('parentFirstName').value.trim();
            const nom = document.getElementById('parentLastName').value.trim();
            const email = document.getElementById('parentEmail').value.trim();
            const phone = document.getElementById('parentPhone').value.trim();
            
            if (!prenom || !nom || !email || !phone) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            if (!email.includes('@')) {
                alert('Adresse email invalide.');
                return;
            }
            // Simuler l'envoi
            console.log('Demande test gratuit :', { prenom, nom, email, phone });
            alert(`Merci ${prenom} ! Un conseiller Yool vous contactera sous 48h avec les détails du test gratuit.`);
            form.reset();
        });
    }
    
    // Animation simple sur les cartes FAQ (optionnel)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // just for fun toggle subtle border
            item.style.transition = '0.1s';
        });
    });
    
    // gestion responsive reset menu si redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.style.display = '';
            navLinks.style.flexDirection = '';
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.backgroundColor = '';
            navLinks.style.padding = '';
            navLinks.style.boxShadow = '';
            navLinks.style.gap = '';
        }
        if (window.innerWidth <= 768 && navLinks && navLinks.style.display !== 'flex') {
            navLinks.style.display = '';
        }
    });
});