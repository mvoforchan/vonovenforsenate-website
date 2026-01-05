// Contact Form - AJAX submission to avoid Netlify dialog
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Submit via fetch (AJAX) to avoid Netlify dialog
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Show success message
                const formContainer = document.querySelector('.contact-form-container');
                formContainer.innerHTML = `
                    <div class="form-success-message">
                        <div class="success-icon">✓</div>
                        <h2>Message Sent Successfully!</h2>
                        <p>Thank you for contacting us. We've received your message and will get back to you within 48 hours.</p>
                        <p>In the meantime, follow us on social media for campaign updates:</p>
                        <div class="success-social-links">
                            <a href="https://facebook.com/vonovenforsenate" target="_blank" class="btn btn-outline">Facebook</a>
                            <a href="https://instagram.com/vonovenforsenate" target="_blank" class="btn btn-outline">Instagram</a>
                        </div>
                        <p style="margin-top: 2rem;">
                            <a href="contact.html" class="btn btn-primary">Send Another Message</a>
                        </p>
                    </div>
                `;
                
                // Scroll to success message
                formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again or email us directly at mark@vonovenforsenate.com');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});