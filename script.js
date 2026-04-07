// Mobile navigation toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Fake newsletter form submission
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "Thanks! Your newsletter signup has been received.";
  newsletterForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});

// Header shadow on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.05)";
  } else {
    header.style.boxShadow = "none";
  }
});