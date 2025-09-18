// Simple form handler for contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      messageDiv.textContent = 'Thank you for reaching out! I will get back to you soon.';
      form.reset();
    });
  }
});