// Volunteer Form Handler - Submits to Google Sheets
// You'll need to replace SCRIPT_URL with your actual Google Apps Script Web App URL

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;
            
            // Collect form data
            const formData = new FormData(form);
            const data = {
                timestamp: new Date().toISOString(),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                city: formData.get('city'),
                zip: formData.get('zip'),
                doorKnocking: formData.get('doorKnocking') || 'no',
                phoneBanking: formData.get('phoneBanking') || 'no',
                yardSign: formData.get('yardSign') || 'no',
                houseParty: formData.get('houseParty') || 'no',
                dataEntry: formData.get('dataEntry') || 'no',
                eventHelp: formData.get('eventHelp') || 'no',
                socialMedia: formData.get('socialMedia') || 'no',
                writing: formData.get('writing') || 'no',
                fundraising: formData.get('fundraising') || 'no',
                other: formData.get('other') || 'no',
                availability: formData.get('availability'),
                skills: formData.get('skills'),
                comments: formData.get('comments')
            };
            
            // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvSOtIgQaRjZjZCNch4HC8vEBATzuGNd1QxHGrkBsMqfqw8U9nwuVMXuDC6db2m1VWmw/exec';
            
            // Submit to Google Sheets
            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                // Hide form, show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Optional: Send to email list (if you have that set up separately)
                // addToEmailList(data.email, data.firstName, data.lastName);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form. Please try again or email us directly at mark@vonovenforsenate.com');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});

// Optional: Function to validate phone number format
function formatPhoneNumber(input) {
    const cleaned = ('' + input).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return input;
}

// Add phone formatting on blur
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            this.value = formatPhoneNumber(this.value);
        });
    }
});