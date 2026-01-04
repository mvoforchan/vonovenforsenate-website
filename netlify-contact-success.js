// Handle Netlify Forms success message
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the contact page with success parameter
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    
    if (success === 'true') {
        // Find the form container
        const formContainer = document.querySelector('.contact-form-container');
        
        if (formContainer) {
            // Replace form with success message
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
            
            // Scroll to the success message
            formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});