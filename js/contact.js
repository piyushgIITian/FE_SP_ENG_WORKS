// EmailJS configuration and form handling
(function() {
    'use strict';
    emailjs.init('YOUR_USER_ID');

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.needs-validation');
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) {
                event.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            
            // Prepare template parameters
            const templateParams = {
                firstName: document.getElementById('validationCustom01').value,
                lastName: document.getElementById('validationCustom02').value,
                phone: document.getElementById('validationCustom03').value,
                subject: document.getElementById('validationCustom04').value,
                message: document.getElementById('validationCustom05').value
            };
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
            emailjs.send('service_nowid0k', 'template_fsyszk4', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    showAlert('success', 'Thank you for your message! Our team will contact you shortly.');
                    
                    // Reset form
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    showAlert('danger', 'Failed to send message. Please try again later.');
                })
                .finally(function() {
                    // Restore button state
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                });
        });
    });
    
    // Function to show alert messages
    function showAlert(type, message) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Insert alert before the form
        const formContainer = document.querySelector('.needs-validation').parentNode;
        formContainer.insertBefore(alertDiv, document.querySelector('.needs-validation'));
        
        // Auto-dismiss after 5 seconds
        setTimeout(function() {
            const bsAlert = new bootstrap.Alert(alertDiv);
            bsAlert.close();
        }, 5000);
    }
})();
