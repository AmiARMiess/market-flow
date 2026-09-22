document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Simple toggle for demo purposes
            // In a real project, you'd toggle a class like 'active' 
            // and style it in CSS to show/hide the menu overlay
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = '#0f172a';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #334155';
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Simple Form Handling
    const form = document.getElementById('leadForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if(emailInput.value) {
                alert(`Thanks! We'll send the audit details to ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // ... existing mobile menu and smooth scroll code ...

    // Pricing Toggle Logic
    const billingToggle = document.getElementById('billing-cycle');
    const amounts = document.querySelectorAll('.amount');
    const labelMonthly = document.getElementById('label-monthly');
    const labelYearly = document.getElementById('label-yearly');

    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const isYearly = this.checked;

            // Update Text Labels Styling
            if (isYearly) {
                labelYearly.classList.add('active');
                labelMonthly.classList.remove('active');
            } else {
                labelMonthly.classList.add('active');
                labelYearly.classList.remove('active');
            }

            // Update Prices with Animation
            amounts.forEach(amount => {
                // Fade out
                amount.style.opacity = '0';
                
                setTimeout(() => {
                    // Change value based on data attribute
                    if (isYearly) {
                        amount.textContent = amount.getAttribute('data-yearly');
                    } else {
                        amount.textContent = amount.getAttribute('data-monthly');
                    }
                    // Fade in
                    amount.style.transition = 'opacity 0.2s';
                    amount.style.opacity = '1';
                }, 200);
            });
        });
    }
});