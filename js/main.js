
"use strict";

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Testimonial slider
const testimonials = [
  {
    quote: "“Finally a way to check WiFi quality before I waste a day.”",
    person: "Sujan, Product Designer"
  },
  {
    quote: "“Booked a quiet spot in Pokhara in under 3 minutes.”",
    person: "Aarati, Developer"
  },
  {
    quote: "“The budget filter saved my team a lot each month.”",
    person: "Prashant, Startup Founder"
  }
];

const quoteEl = document.getElementById("quote");
const personEl = document.getElementById("person");
const dots = document.querySelectorAll(".dot");

if (quoteEl && personEl && dots.length) {
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const i = Number(dot.dataset.i);
      quoteEl.textContent = testimonials[i].quote;
      personEl.textContent = testimonials[i].person;

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
}

// Click handlers for pricing buttons
document.querySelectorAll("[data-action='pricing']").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Thanks! This is a demo, so payments are disabled.");
  });
});
