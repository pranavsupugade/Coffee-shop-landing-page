// ============================
// Smooth Scroll for Navigation
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ============================
// CTA Button Click Alert
// ============================
document.querySelectorAll(".cta-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Thanks for your interest in Brewly! ☕ Subscriptions opening soon.");
  });
});

// ============================
// Scroll Animation for Fade-In Sections
// ============================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ============================
// Contact Form Submission Alert
// ============================
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual form submission
  alert("Thank you for contacting Brewly! We will get back to you soon. ☕");
  contactForm.reset(); // clear the form
});
