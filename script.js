const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  // Add animation when opening/closing the menu
  mobileMenu.classList.toggle('animate-slide-down');
});