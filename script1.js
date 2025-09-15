// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0 });
gsap.from(".home-text h1", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".btn", { duration: 1, scale: 0.5, opacity: 0, delay: 1.5 });

// Scroll animations
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Typing Effect
new Typed("#typing", {
  strings: ["Web Developer 💻", "Designer 🎨", "Coder 👩‍💻", "Tech Enthusiast 🚀"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});
