// Array of interesting facts about the portfolio owner
const interestingFacts = [];

// Function to show interesting facts with animation
function showFact() {
  const randomIndex = Math.floor(Math.random() * interestingFacts.length);
  const fact = interestingFacts[randomIndex];

  // Create alert with custom styling via native browser alert
  alert("💡 Fakta Menarik: " + fact);
}

// Smooth scroll animation for navigation links
// Smooth scroll fix
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideInLeft 0.8s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe skill cards and hobby items
document.querySelectorAll(".skill-card, .hobby-item").forEach((el) => {
  el.style.opacity = "0";
  observer.observe(el);
});

// Add scroll event to navbar for subtle background change
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.boxShadow = "var(--shadow-md)";
  }
});

// Console message for easter egg
console.log(
  "%cHalo! Terima kasih sudah mengunjungi portfolio saya 👋",
  "color: #0066ff; font-size: 16px; font-weight: bold;",
);
console.log(
  "%cSebarkan ke teman-teman Anda jika Anda menyukainya! 😊",
  "color: #10b981; font-size: 14px;",
);
// Highlight navbar saat section aktif
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
