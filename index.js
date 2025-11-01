// Array of interesting facts about the portfolio owner
const interestingFacts = [
  "Saya belajar web development selama 2 tahun terakhir dan sudah membuat 15+ proyek",
  "Saya percaya bahwa desain yang baik adalah yang tidak terlihat - itu bekerja dengan sempurna",
  "Hobi saya adalah mengeksplorasi teknologi baru dan membaca dokumentasi framework terbaru",
  "Saya telah berkontribusi pada 5 open-source projects di GitHub",
  "Kecepatan loading website adalah prioritas utama saya dalam setiap project",
  "Saya bisa menghabiskan 4 jam tanpa henti hanya untuk membuat animasi CSS yang sempurna",
  "Inspirasi terbesar saya datang dari dribbble.com dan design system yang elegant",
  "Saya percaya bahwa setiap user experience harus intuitif dan menyenangkan",
  "Favorit saya adalah dark mode - selalu lebih mudah di mata!",
  "Saya sedang belajar TypeScript dan machine learning untuk web development",
];

// Function to show interesting facts with animation
function showFact() {
  const randomIndex = Math.floor(Math.random() * interestingFacts.length);
  const fact = interestingFacts[randomIndex];

  // Create alert with custom styling via native browser alert
  alert("💡 Fakta Menarik: " + fact);
}

// Smooth scroll animation for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
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
  "color: #0066ff; font-size: 16px; font-weight: bold;"
);
console.log(
  "%cSebarkan ke teman-teman Anda jika Anda menyukainya! 😊",
  "color: #10b981; font-size: 14px;"
);
