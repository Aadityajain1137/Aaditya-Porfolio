// src/utils/scrollAnimations.js
export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class when element enters viewport
          entry.target.classList.add('visible');
        } else {
          // Remove visible class when element leaves viewport
          entry.target.classList.remove('visible');
        }
      });
    },
    { 
      threshold: 0.2,                // 20% of element must be visible
      rootMargin: '0px 0px -50px 0px'  // small offset to trigger slightly earlier
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
}