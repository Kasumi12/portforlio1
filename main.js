// Theme toggle
const btn = document.getElementById("themeToggle");
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

// Accordion toggles with smooth open/close
document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isActive = content.classList.contains("active");
    // Close all accordions in the same section
    button.parentElement.querySelectorAll('.accordion-content').forEach(ac => ac.classList.remove('active'));
    button.parentElement.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('active'));
    if (!isActive) {
      content.classList.add("active");
      button.classList.add("active");
    }
  });
});

// Hamburger mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('open');
});
navToggle.addEventListener('keydown', (e) => {
  if (e.key === "Enter" || e.key === " ") navToggle.click();
});
// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 780) nav.classList.remove('open');
  });
});

// Animate sections on scroll in
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.18 }
);
sections.forEach(sec => observer.observe(sec));

// Contact Form Submit Handler (mailto fallback)
const form = document.getElementById("emailForm");
const formSuccess = document.getElementById("formSuccess");
const formError = document.getElementById("formError");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  formSuccess.style.display = "none";
  formError.style.display = "none";

  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!email || !message) {
    formError.textContent = "Please fill out both fields.";
    formError.style.display = "block";
    return;
  }
  // You can update this to your preferred email address
  const targetEmail = "kianaxl49@gmail.com";
  const mailto = `mailto:${targetEmail}?subject=Portfolio Contact from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;
  formSuccess.textContent = "Email window opened! You can send your message.";
  formSuccess.style.display = "block";
  form.reset();
});